import React from 'react'
import Circle from './ui/circle'
import BreadCrumbs from './ui/breadcrumbs'

interface NavbarProps {
  refs: Record<string, React.RefObject<HTMLDivElement | null>>;
}

const Navbar = ({ refs  }: NavbarProps) => {
  return (
    <div  className=' mb-4 text-sm fixed top-0 left-0 z-10  w-full '>
      <div className='max-w-7xl mx-auto border border-gray-400'>
        <div className='flex p-2 items-center gap-2 bg-bg-command'>
        <div className='flex gap-1'>
            <Circle size={3} color='bg-red-500'/>
            <Circle size={3} color='bg-yellow-500'/>
            <Circle size={3} color='bg-green-500'/>
        </div>
        <span className='text-gray-400'>zidan-rohman@portfolio:~$</span>
        <BreadCrumbs refs={refs} />
        </div>

      </div>
    </div>
  )
}

export default Navbar