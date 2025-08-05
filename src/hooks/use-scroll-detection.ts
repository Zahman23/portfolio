'use client'

import { useEffect } from "react"
import { useCommandStore } from "@/store/command-store"

export const useScrollDetection = (refs: React.RefObject<HTMLDivElement>) => {
    const {setVisitedSections, updateBreadcrumbsFromScroll} = useCommandStore()

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            const visibleSections: string[] = []

            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    const sectionName = entry.target.getAttribute("data-section")
                    if(sectionName){
                        visibleSections.push(sectionName)
                    }
                }
            })

            // Get all currently visible sections
            const allVisibleSections: string[] = []
            Object.entries(refs).forEach(([key, ref]) => {
                if(ref.current){
                    const rect = ref.current.getBoundingClientRect()
                    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

                    if(isVisible){
                        const sectionName = key.replace("Ref", "")
                        allVisibleSections.push(sectionName)
                    }
                }
            })

            setVisitedSections(allVisibleSections)
            updateBreadcrumbsFromScroll()
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Observe all section elements
        Object.entries(refs).forEach(([key, ref]) => {
            if(ref.current){
                const sectionName = key.replace("Ref", "")
                ref.current.setAttribute("data-section", sectionName)
                observer.observe(ref.current)
            }
        })

        // Initial check
        const checkInitialVisibility = () => {
            const allVisibleSections: string[] = []
            Object.entries(refs).forEach(([key, ref]) => {
                if(ref.current){
                    const rect = ref.current.getBoundingClientRect()
                    const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

                    if(isVisible){
                        const sectionName = key.replace("Ref", "")
                        allVisibleSections.push(sectionName)
                    }
                }
            })
            setVisitedSections(allVisibleSections)
            updateBreadcrumbsFromScroll()
        }

        // Check initial visibility after a short delay
        setTimeout(checkInitialVisibility, 100)

        // Also listen to scroll events for more resposive updates
        const handleScroll = () => {
            checkInitialVisibility()
        }

        window.addEventListener('scroll', handleScroll, {passive: true})

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    },[refs, updateBreadcrumbsFromScroll, setVisitedSections])
}