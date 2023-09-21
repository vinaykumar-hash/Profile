import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className='ProjectPage h-screen w-screen bg-primaryGradient-200 sm:px-60 px-8 flex justify-start pt-20 items-start flex-col'>
        <h2 className='inline-block text-white text-4xl font-semibold SLSS'>Project<span className='opacity-50'>&lsquo;s</span></h2>
        <div className='sm:h-4/6 h-4/6 sm:w-5/6 bg-white/70 mt-10 relative'>
          <div className='InProgress w-4 h-4 bg-orange-500 absolute -top-2 -right-2 rounded-full z-40'></div>
          <div className=' w-4 h-4 bg-orange-500 absolute -top-2 -right-2 rounded-full animate-ping z-30'></div>
          <div className='w-full flex justify-between  items-center px-12 py-8 sm:flex-row flex-col'>
            <h3 className='text-4xl text-gray-950 font-semibold SLS cursor-default'>ModernCSS</h3>
            <Link href={"https://moderncss.vercel.app"}><p className=' text-primaryGradient-200 cursor-pointer'>Visit The Projec<span className='underline'>t</span></p></Link>
          </div>
          <p className='absolute sm:left-12 sm:w-1/6 w-5/6 sm:bottom-auto bottom-10 text-gray-800 sm:mx-0 mx-6'>A place with thousands of unique design idea&lsquo;s for building application's faster</p>
          <div className='relative w-full'>
            <img className='absolute top-6 -right-4 sm:w-3/4 w-full hover:scale-105 transition-all hover:z-10 z-0' src="/images/moderncss2.png" alt="" />
            <img className='absolute top-0 -right-10 sm:w-3/4 w-full hover:scale-105 transition-all hover:z-10 z-0' src="/images/moderncss1.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Project