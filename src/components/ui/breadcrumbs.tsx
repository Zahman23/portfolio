import React from 'react'

import { useCommandStore } from '@/store/command-store';
import { ChevronRight } from 'lucide-react'

interface BreadCrumbsProps {
    refs: Record<string, React.RefObject<HTMLDivElement | null>>;
}

const BreadCrumbs = ({ refs }: BreadCrumbsProps) => {

    const  {breadcrumbs, scrollToSection,visitedSections} = useCommandStore()

    if(breadcrumbs.length === 0) return null

    const handleBreadcrumbClick = (section: string) => {
        scrollToSection(section, refs)
    }

  return (
    <div className='flex items-center text-sm text-gray-400'>
        <span className='mr-2'>~</span>
        {breadcrumbs.map((crumb, index) => (
            <div key={crumb} className='flex items-center'>
                <button
                    onClick={() => handleBreadcrumbClick(crumb)}
                    className='text-green-400 hover:text-green-300 transition-colors cursor-pointer'
                >
                    {crumb}
                </button>
                {index < breadcrumbs.length - 1 && <ChevronRight className='w-3 h-3 mx-1 text-gray-500'/>}
            </div>
        ))}
    </div>
  )
}

export default BreadCrumbs