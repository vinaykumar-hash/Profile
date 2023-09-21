"use client"
import { useEffect } from 'react'
import React from 'react'

const page = () => {
  useEffect(()=>{
    document.querySelector(".SendButton").addEventListener("click",function(){
        alert("clicked")
        document.querySelector(".ContactForm").innerHTML = ""
        document.querySelector(".ContactForm").style.background = "#FFEEA3"
    })
  },[])
  return (
    <div></div>
  )
}

export default page