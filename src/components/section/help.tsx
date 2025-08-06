import React from 'react'

interface HelpProps {
  ref: React.RefObject<HTMLDivElement | null>;
  
}


const Help = ({ref} : HelpProps) => {
   

  const styleTypeText = 'text-green-400 cursor-pointer hover:border-b hover:border-green-400'

  return (
    <div className='p-2 min-h-screen mt-9' ref={ref} id='help'>
      <div className='space-y-4'>
        <div className='flex items-center'>
          <span className='text-primary'>$</span>
          <span className='ml-2 text-primary'>Welcome to Zidan Rohman terminal portfolio</span>
        </div>
        <div className='text-gray-400 text-sm'>
          Navigate using command: about, projects, skills, contact, back, clear
        </div>
      </div>

      <div className='space-y-4'>
        <div className='text-secondary text-xl mb-4'>
          {">"} Available Commands
        </div>
        <div className='text-gray-300 mb-6'>
          Passionate about learning new technologies creating innovative web solutions and clean code.
        </div>
        <div className="text-gray-300 space-y-2">
                <div>
                  • Type <span className={styleTypeText}>&apos;about&apos;</span> to learn more about me
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;skills&apos;</span> to check out my technical skills
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;experience&apos;</span> to view my recent experience
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;projects&apos;</span> to view my recent projects
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;contact&apos;</span> to get in touch with me
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;back&apos;</span> to return to previous section
                </div>
                <div>
                  • Type <span className={styleTypeText}>&apos;clear&apos;</span> to return to this section
                </div>
              </div>
      </div>
    </div>
  )
}

export default Help