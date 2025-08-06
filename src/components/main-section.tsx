'use client'

import React, { useEffect, useRef } from 'react'
import Navbar from './navbar'
import { useCommandStore } from '@/store/command-store'
import { useSectionRef } from '@/hooks/use-section-ref'
import { useScrollDetection } from '@/hooks/use-scroll-detection'
import CommandInput from './ui/command-input'
import Help from './section/help'
import About from './section/about'
import Skills from './section/skills'
import { sectionOrder } from '@/data/data'

const MainSection = () => {
  const {showHelp, currentSection} = useCommandStore()
  const [showBorderPrompt, setShowBorderPrompt] = React.useState(true);
  const refs = useSectionRef()
  useScrollDetection({
    refs: refs,
    sectionOrder: sectionOrder
  })

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowBorderPrompt(false)
  //   }, 5000)

  //   return () => clearTimeout(timer)
  // },[setShowBorderPrompt])

  return (
    <>
    <main className=' bg-black text-green-400 font-mono overflow-hidden relative '>
      <Navbar refs={refs}/>
      {/* Border Click Prompt */}
      {showBorderPrompt && (
        <div className='fixed top-11 right-4 bg-gray-800 border border-green-400 p-2 rounded text-xs text-green-300 animate-pulse z-20'>
          Click on the border to focus terminal
        </div>
      )}

     

      <div className='max-w-7xl mx-auto overflow-y-auto cursor-text relative bg-bg-command border border-gray-400'
      onClick={() => setShowBorderPrompt(false)}
      tabIndex={0}
      >
         {/* Floating Command Input - Only show when not on help section */}
        <div className=''>
        <Help ref={refs.helpRef} />
        <About ref={refs.aboutRef} />
        <Skills ref={refs.skillsRef}/>
        </div>
      </div>
      <CommandInput refs={refs}  />
    </main>
    </>
  )
}

export default MainSection