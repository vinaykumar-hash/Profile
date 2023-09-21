"use client"
import React from 'react'
import { useEffect } from 'react'
const Navbar = () => {
  useEffect(()=>{
    document.querySelector(".ProjectButton").addEventListener("click",()=>{
      document.querySelector(".ProjectPage").scrollIntoView({behavior:"smooth"})
    })
    document.querySelector(".ContactButton").addEventListener("click",()=>{
      document.querySelector(".ContactPage").scrollIntoView({behavior:"smooth"})
    })
  },[])
  return (
    <div className='sticky top-0 w-full h-14 bg-gray-200/50 backdrop-blur-lg z-50 sm:px-40 px-4'>
        <ul className=' transition-all flex justify-end items-center h-full gap-8 font-normal text-base text-gray-800 cursor-pointer'>
            <button className='hover:text-black relative ProjectButton sm:cursor-pointer cursor-none'>Project&lsquo;s</button>
            <button className='hover:text-black relative ContactButton sm:cursor-pointer cursor-none'>Contact</button>
            <button className='hover:text-black relative AboutButton sm:cursor-pointer cursor-none'>About</button>
        </ul>
    </div>
  )
}

export default Navbar