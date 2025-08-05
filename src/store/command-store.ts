'use client'

import {create} from 'zustand'

interface CommandState {
    currentCommand: string;
    setCurrentCommand: (command: string) => void;
    errorMessage: string;
    setErrorMessage: (message: string) => void;
    showError: boolean;
    setShowError: (show: boolean) => void;
    scrollHistory: string[];
    setScrollHistory: (history: string[] | ((prev: string[]) => string[])) => void;
    currentSection: string;
    setCurrentSection: (section: string) => void;
    showHelp: boolean;
    setShowHelp: (show: boolean) => void;
    breadcrumbs: string[];
    setBreadcrumbs: (crumbs: string[]) => void;
    visitedSections: string[];
    setVisitedSections: (sections: string[]) => void;

    // Actions
    scrollToSection: (section: string, refs: React.RefObject<HTMLDivElement>) => void;
    handleBack: (refs: React.RefObject<HTMLDivElement>) => void;
    handleInvalidCommand: (command: string) => void;
    handleCommand: (command: string, refs: React.RefObject<HTMLDivElement  | null>) => void;
    updateBreadcrumbsFromScroll: () => void
}

export const useCommandStore = create<CommandState>((set, get) => ({
    currentCommand: "",
    setCurrentCommand: (command: string) => set({currentCommand: command}),

    errorMessage: "",
    setErrorMessage: (message: string) => set({errorMessage: message}),

    showError: false,
    setShowError: (show: boolean) => set({showError: show}),

    scrollHistory: ["help"],
    setScrollHistory: (history: string[] | ((prev: string[]) => string[])) => set((state) => ({
        scrollHistory: typeof history === 'function' ? history(state.scrollHistory) : history
    })),

    currentSection: "help",
    setCurrentSection: (section: string) => set({currentSection: section}),

    showHelp: true,
    setShowHelp: (show: boolean) => set({showHelp: show}),

    breadcrumbs: [],
    setBreadcrumbs: (breadcrumbs: string[]) => set({breadcrumbs}),

    visitedSections: ["help"],
    setVisitedSections: (sections) => set({visitedSections: sections}),

    // Actions
    scrollToSection: (sectionName: string, refs: any) => {
        console.log(refs)
        const targetRef: React.RefObject<HTMLDivElement> = refs[`helpRef`]
        if(targetRef?.current){
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
        set((state) => ({
            scrollHistory: [...state.scrollHistory, sectionName],
            currentSection: sectionName,
            errorMessage: '',
            showError: false,
        }))
    },
    handleBack: (refs: any) => {
        const {scrollHistory} = get();
        if(scrollHistory.length > 1){
            const newHistory = scrollHistory.slice(0, -1)
            const previousSection = newHistory[newHistory.length - 1];
            
            const targetRef: React.RefObject<HTMLDivElement> = refs[`${previousSection}Ref`]
            if(targetRef?.current){
                targetRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })

                set({
                scrollHistory: newHistory,
                currentSection: previousSection,
                errorMessage: '',
                showError: false,
            })
            }else{
                set({
                    errorMessage: "bash: back: no previous history available",
                    showError: true,
                })
            }

            
        }
    },
    handleInvalidCommand: (command: string) => {
        set({
            errorMessage: `bash: ${command}: command not found\n\nAvailable commands: \n> help. \n> about. \n> projects. \n> experience. \n> skills. \n> contact. \n> clear. \n> back.`,
            showError: true,
        })
    },
    handleCommand: (command: string, refs: any) => {
        const {showHelp, scrollToSection, handleBack, handleInvalidCommand} = get()

        set({currentCommand: ''})

        if(command === 'help'){
            set({showHelp: true})
        }else if(command === 'clear'){
            set({
                showHelp: true,
                scrollHistory: ['help'],
                currentSection: 'help',
                errorMessage: "",
                showError: false,
                breadcrumbs: []
            })
            if(refs.helpRef.current){
                refs.helpRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }else if(command === 'back'){
            handleBack(refs)
        }else if(['about', 'projects', 'experience', 'skills', 'contact'].includes(command)){
            if(showHelp){
                scrollToSection(command, refs)
            }else{
                set({
                    errorMessage: `bash: ${command}: section not available Type 'help' to see available sections.`,
                    showError: true,
                })
            }
        }else if(command === ''){
            handleInvalidCommand(command)
        }

    },
    updateBreadcrumbsFromScroll: () => {
        const {visitedSections} = get()
        const sectionOrder = ["help", "about", "projects", "experience", "skills", "contact"];

        let breadcrumbPath: string[] = [];

        for(const section of sectionOrder){
            if(visitedSections.includes(section)){
                breadcrumbPath.push(section)
            }else{
                break;
            }
        }

        if(breadcrumbPath.length > 1 && breadcrumbPath[0] === 'help'){
            breadcrumbPath = breadcrumbPath.slice(1)
        }

        set({breadcrumbs: breadcrumbPath})
    }
}))
