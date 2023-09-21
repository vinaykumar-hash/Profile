import React from 'react'

const ToolsPage = () => {
  return (
    <div className='w-screen h-auto flex justify-center items-center flex-col sm:px-60 px-8 gap-10 py-10' style={{background:"#222"}}>
        <h1 className='text-4xl text-white font-medium'>Tool's In Hand</h1>
        <div className='transition-all flex flex-wrap justify-center items-center w-full gap-10 bg-white/10 rounded-lg py-10 px-10'>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/fluency/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/fluency/48/bash.png" alt="bash"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/fluency/48/android-os.png" alt="android-os"/>
        <img className='saturate-0 hover:saturate-100 bg-white/20 rounded-full ' width="50" height="50" src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
        <img className='saturate-0 hover:saturate-100 ' width="50" height="50" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>
        </div>
        </div>
  )
}

export default ToolsPage