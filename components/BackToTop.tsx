import React, { useEffect, useState} from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { BsChevronUp } from 'react-icons/bs'

import SlideUp from './SlideUp'

const BackToTop = () => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false)
    })
  })

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return show && (
    <button 
    onClick={scrollToTop} className={`w-12 h-12 animate-fadeIn  bg-slate-300 right-0 hover:bg-slate-500 rounded-l-xl fixed bottom-24 cursor-pointer flex justify-center items-center transition-all`}>
    <BsChevronUp size={25} />
    </button>
  )
}

export default BackToTop