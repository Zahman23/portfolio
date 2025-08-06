'use client'

import { useEffect, useRef } from "react"
import { useCommandStore } from "@/store/command-store"

interface useScrollDetectionProps {
  refs: Record<string, React.RefObject<HTMLDivElement | null>>,
  sectionOrder: string[]
}

export const useScrollDetection = ({
  refs,
  sectionOrder

} : useScrollDetectionProps) => {
    const {setVisibleSections, updateBreadcrumbsFromScroll, visitedSections,} = useCommandStore()

    const observerRef = useRef<Record<string, IntersectionObserver>>({})
    const visibleMap = useRef<Record<string,boolean>>({})

   useEffect(() => {
    const handleVisible = () => {
      const visibleSection: string[] = []

      for(const section of sectionOrder){
        // console.log("VisibleMap",visibleMap.current[section])
        if(visibleMap.current[section]){
          visibleSection.push(section)
        }
      }

      if(visibleSection.length > 0){
        const lastVisible = sectionOrder.indexOf(visibleSection[visibleSection.length - 1])
        const filteredSections = sectionOrder.slice(0, lastVisible + 1)
        // console.log(filteredSections)
        setVisibleSections(filteredSections)
        updateBreadcrumbsFromScroll()
        // console.log("VisitedSection",visitedSections)
      }
    }


    sectionOrder.forEach((section) => {
      const ref = refs[`${section}Ref`]
      const el = ref?.current
      if(!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibleMap.current[section] = entry.isIntersecting
          handleVisible()
        },
        {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.9
        }
      )

      observer.observe(el)
      observerRef.current[section] = observer
    })

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(observerRef.current).forEach((observer) => observer.disconnect())
    }
   },[refs,setVisibleSections,sectionOrder, visitedSections,updateBreadcrumbsFromScroll])

}

