"use client"
import React from 'react'
import { useEffect } from 'react'
const Sparkle = () => {
    useEffect(()=>{
        
        function CreateSparkle(bottom,top,leftstart,leftend){
            let i = 0
                setTimeout(function (){
                    let NewSparkle = document.createElement("div")
                    i++
                    let size = Math.random()*10
                    NewSparkle.style.transition = "all ease-in-out 1000ms"
                    NewSparkle.style.filter = "blur(10%)"
                    NewSparkle.style.zIndex = "9"
                    NewSparkle.style.height = `${size}px`;
                    NewSparkle.style.width = `${size}px`;
                    NewSparkle.style.borderRadius = "100px"
                    NewSparkle.style.background = "#7AE7C7"
                    NewSparkle.style.position = "absolute"
                    NewSparkle.style.top = `${Math.random() * (bottom - top) + top}px`
                    NewSparkle.style.left = `${Math.random() * (leftend - leftstart) + leftstart}px`
                    NewSparkle.style.opacity = "0"
                    NewSparkle.style.transform = "Scale(0)"
                    document.querySelector("body").appendChild(NewSparkle)
                    setTimeout(function(){
                        NewSparkle.style.opacity = "1"
                        NewSparkle.style.transform = "Scale(1)"
                        setTimeout(function(){
                            NewSparkle.style.opacity = "0"
                            NewSparkle.style.transform = "Scale(0)"
                            setTimeout(function(){
                                NewSparkle.remove()
                                i--
                            },1000)
                        },1000)
                    },1000)
                },500)
        }         
        let Sparkle = document.querySelectorAll(".Sparkle")
        Sparkle.forEach((el)=>{
            var rect = el.getBoundingClientRect();
            const bgColor = window.getComputedStyle(el).backgroundColor
            console.log(bgColor)
            setInterval(() =>CreateSparkle(rect.top+rect.height,rect.top,rect.left,rect.left+rect.width),100)
            
        })
        let HeroText = document.querySelector(".HeroText")
        let times = 0
        setInterval(()=>{
            if(times==0){
                HeroText.style.transform = `RotateX(90deg)`
                setTimeout(() => {
                    HeroText.innerHTML = "Passion Coder<br>Learner"
                    HeroText.style.transform = `RotateX(0deg)`
                }, 150);
                times = 1
            }else{
                HeroText.style.transform = `RotateX(90deg)`
                setTimeout(() => {
                    HeroText.innerHTML = "Web Designer<br>Developer"
                    HeroText.style.transform = `RotateX(0deg)`
                }, 150);
                times = 0
            }
        },5000)
    },[])
  return (
    <div></div>
  )
}

export default Sparkle