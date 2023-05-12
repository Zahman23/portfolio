'use client'
import React,{useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { BsChevronUp } from 'react-icons/bs'



export default function BackToTop() {
     const [show, setShow] = useState(false)

     useEffect(() => {
        window.addEventListener('scroll', () => {
          return window.scrollY > 600 ? setShow(true) : setShow(false)
        })
      })
    
      const scrollToTop = () => {
        scroll.scrollToTop()
      }
    
      return(
        <button
         onClick={scrollToTop} 
         className={`${show ? "w-12 h-12" : "visible w-0 h-0"} animate-fadeIn  bg-slate-300 right-0  hover:bg-slate-500 rounded-l-xl fixed bottom-24 cursor-pointer flex justify-center items-center transition-all`}
         >
         <BsChevronUp size={25} />
        </button>
      )
      
}
