"use client"
import { useEffect } from 'react'
import React from 'react'

export const SimpleComp = () => {
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
