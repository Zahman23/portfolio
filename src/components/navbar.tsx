import React from 'react'
import Circle from './ui/circle'

const Navbar = () => {
  return (
    <div className=' p-2 bg-gray-900 flex items-center gap-2 mb-4 text-sm sticky top-0 z-10 pb-2'>
        <div className='flex gap-1'>
            <Circle size={3} color='red'/>
            <Circle size={3} color='yellow'/>
            <Circle size={3} color='green'/>
        </div>
        <span className='text-gray-400'>zidan-rohman@portfolio:~$</span>
    </div>
  )
}

export default Navbar