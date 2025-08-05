'use client'

import { useRef } from "react"

export const useSectionRef = () => {
    const helpRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return {
        helpRef,
        aboutRef,
        projectsRef,
        experienceRef,
        skillsRef,
        contactRef
    }
}