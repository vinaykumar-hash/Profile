import React from 'react'
import Sparkle from './Sparkle'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='Hero h-screen w-full bg-white flex justify-center items-center flex-col gap-8'>
        <div className='h-screen w-screen absolute opacity-20 Testpage' style={{zIndex:"0"}}><div className='container'></div></div>
        <div className='Photo h-60 w-60 bg-gray-400 rounded-full z-10 overflow-hidden'><img className='scale-105' src='/images/profile1.jpg'></img></div>
        <h1 className='text-4xl text-gray-950 font-bold font-inter SLS z-10'>Vinay Kumar</h1>
        <p className='Sparkle text-4xl font-bold HeroText SLS text-center mb-8 backdrop-blur-none px-10 pb-8 pt-6 transition-all' >Web Designer <br></br> Developer</p>
        <div className='w-auto flex justify-center items-center flex-col gap-4 z-10'>
          <div className='text-xl text-thirdGradient-100 flex justify-center items-center SLSS font-medium'>Connect<p className='text-gray-300 px-2 font-thin'>With Me</p></div>
          <div className='flex justify-center items-center gap-4 cursor-default'>
          <Link href={"https://www.instagram.com/vinay_kumar.0.0/"}><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></Link>
          <Link href={"https://www.linkedin.com/in/vinay-kumar-974793230"}><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></Link>
          <a href="mailto:vinaykumar7525@gmail.com"><img width="48" height="48" src="https://img.icons8.com/fluency/48/new-post.png" className='EmailHover' alt="new-post"/></a>
          </div>
          
        </div>
    </div>
  )
}

export default Hero