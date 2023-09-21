"use client"
import { useEffect } from 'react'
import React from 'react'

const SecondPage = () => {
  useEffect(()=>{
    function ChangeInnerText(){
      document.querySelector(".G1").textContent = "Weeb"
      document.querySelector(".G11").innerHTML = "I always liked watching anime and<br>web series which keeps me entertained"
      document.querySelector(".G2").textContent = "Gaming Is The Fuel"
      document.querySelector(".G22").innerHTML = "Playing games is what keeps me Focus , Motivated and<br>drive me to extend my Limits"
      // document.querySelector(".G1").classList.remove("SecondPageG1")
      // document.querySelector(".G1").classList.add("text-gray-800")
      // document.querySelector(".G2").classList.remove("SecondPageG2")
      // document.querySelector(".G2").classList.add("text-gray-800")
      // document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(20)"
      document.querySelector(".WeebImg").style.transform = "translateY(-100%)"
      document.querySelector(".WeebImg").style.opacity = "0"
      document.querySelector(".GamingImg").style.transform = "translateY(-100%)"
      document.querySelector(".GamingImg").style.opacity = "0"
      setTimeout(function(){
        document.querySelector(".WeebImg").style.transform = "translateY(100%)"
        document.querySelector(".WeebImg").src = "/images/Weeb.svg"
        document.querySelector(".GamingImg").style.transform = "translateY(100%)"
        document.querySelector(".GamingImg").src = "/images/gaming.svg"
        setTimeout(() => {
          document.querySelector(".WeebImg").style.transform = "translateY(0%)"
          document.querySelector(".WeebImg").style.opacity = "70%"
          document.querySelector(".GamingImg").style.transform = "translateY(0%)"
          document.querySelector(".GamingImg").style.opacity = "70%"
        }, 150);
      },150)
    }
    function ChangeInnerTextBack(){
      document.querySelector(".G1").textContent = "Learning Is The Key"
      document.querySelector(".G11").innerHTML = "I always try to learn new things and <br>getting to know so much keeps me motivated"
      document.querySelector(".G2").textContent = "Hustle"
      document.querySelector(".G22").innerHTML = "There were obstacles at time that seems impossible to overcome ,<br>that’s a sign of correct path"
      // document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(0)"
      // document.querySelector(".G1").classList.remove("text-gray-800")
      // document.querySelector(".G1").classList.add("SecondPageG1")
      // document.querySelector(".G2").classList.remove("text-gray-800")
      // document.querySelector(".G2").classList.add("SecondPageG2")
      document.querySelector(".WeebImg").style.transform = "translateY(100%)"
      document.querySelector(".WeebImg").style.opacity = "0"
      document.querySelector(".GamingImg").style.transform = "translateY(100%)"
      document.querySelector(".GamingImg").style.opacity = "0"
      setTimeout(function(){
        document.querySelector(".WeebImg").style.transform = "translateY(-100%)"
        document.querySelector(".WeebImg").src = "/images/image1.svg"
        document.querySelector(".GamingImg").style.transform = "translateY(-100%)"
        document.querySelector(".GamingImg").src = "/images/image2.svg"
        setTimeout(() => {
          document.querySelector(".WeebImg").style.transform = "translateY(0%)"
          document.querySelector(".WeebImg").style.opacity = "70%"
          document.querySelector(".GamingImg").style.transform = "translateY(0%)"
          document.querySelector(".GamingImg").style.opacity = "70%"
        }, 150);
      },150)
    }
    // document.querySelector(".LetsTalkButton").addEventListener("click",()=>{
    //   document.querySelector(".ContactPage").scrollIntoView({behavior:"smooth"})
    // })




    let timeoutId;
    // const element = document.querySelector('.SecondPage');

    // element.addEventListener('mousedown', () => {
    //   // This function will be called when the mouse button is pressed down.
    //   timeoutId = setTimeout(() => {
    //     // This code will run after a certain time when the mouse button is held down.
    //     // You can perform your desired action here.
    //     alert('Mouse button held down.');
    //   }, 1000); // Adjust the time in milliseconds as needed.
    // });

    // element.addEventListener('mouseup', () => {
    //   // This function will be called when the mouse button is released.
    //   clearTimeout(timeoutId); // Cancel the timeout if the button is released before the specified time.
    // });







    let RevealByHold = 0
    document.querySelector(".SecondPage").addEventListener("mousedown",(ev)=>{
      // document.querySelector(".RevealBG").style.top = `${ev.clientY}px`
      // document.querySelector(".RevealBG").style.left = `${ev.clientX}px`
      if(ev.target === document.querySelector(".LetsTalkButton") ||document.querySelector(".LetsTalkButton").contains(ev.target)){
        if(document.querySelector(".ContactPage").style.display == "hidden"){
          document.querySelector(".Hero").scrollIntoView({behavior:"smooth"})
        }else{
          document.querySelector(".ContactPage").scrollIntoView({behavior:"smooth"})
        }
      }
      else{
        timeoutId = setTimeout(() => {
          RevealByHold = 1
          // This code will run after a certain time when the mouse button is held down.
          // You can perform your desired action here.
          document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(25)"
          ChangeInnerText();
          setTimeout(()=>{
            document.querySelector(".RevealBG").classList.remove("z-30")
            document.querySelector(".RevealBG").classList.add("z-20")
          },150)
        }, 500); // Adjust the time in milliseconds as needed.
      // document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(25)"
      // alert("KEY DOWN")
      // ChangeInnerText();
      // setTimeout(()=>{
      //   document.querySelector(".RevealBG").classList.remove("z-30")
      //   document.querySelector(".RevealBG").classList.add("z-20")
      // },150)
    }
      
    })
    document.querySelector(".SecondPage").addEventListener("mouseup",(ev)=>{
      // alert("KEY UP")
      if(RevealByHold==1){
      clearTimeout(timeoutId);
      document.querySelector(".RevealBG").classList.remove("z-20")
      document.querySelector(".RevealBG").classList.add("z-30")
      ChangeInnerTextBack();
      
      setTimeout(()=>{
        document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(0)"
        RevealByHold = 0
      },150)}
    })
    let RevealActive = 0
    document.querySelector(".RevealButton").addEventListener("click",()=>{
      if(RevealActive==0){
      document.querySelector(".RevealButtonSpan").style.left = "22px"
      document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(25)"
          ChangeInnerText();
          setTimeout(()=>{
            document.querySelector(".RevealBG").classList.remove("z-30")
            document.querySelector(".RevealBG").classList.add("z-20")
          },150)
          RevealActive = 1
      }else{
      document.querySelector(".RevealButtonSpan").style.left = "2px"
      clearTimeout(timeoutId);
      document.querySelector(".RevealBG").classList.remove("z-20")
      document.querySelector(".RevealBG").classList.add("z-30")
      ChangeInnerTextBack();
      
      setTimeout(()=>{
        document.querySelector(".RevealBG").style.transform = "translateX(-50%) Scale(0)"
      },150)
      RevealActive = 0
      }
    })
  },[])
  return (
    <div className='SecondPage overflow-hidden w-full relative h-screen flex justify-evenly items-center sm:px-80 px-16 flex-col sm:gap-20 gap-10 py-8 sm:py-0'>
        <div className='font-semibold text-white bg-red-500 rounded-lg sm:block hidden cursor-pointer absolute bottom-10 right-10 px-4 py-2 '>Press/Hold</div>
        <div className='z-40 sm:hidden   RevealButton w-10 h-5 bg-white rounded-full absolute top-10 right-10 flex justify-start items-center'><span className='RevealButtonSpan w-4 h-4 rounded-full bg-blue-950 absolute transition-all ' style={{left:"2px"}}></span></div>
        <div className='RevealBG bg-gray-950 z-30 absolute top-0 left-1/2 transition-all'></div>
        <div className='flex justify-around items-center w-full sm:flex-row flex-col-reverse sm:gap-0 gap-16 z-20'>
            <div><h1 className=' SecondPageG1 G1 text-4xl font-bold SLS transition-all' style={{lineHeight:"initial"}}>Learning Is The Key</h1><p className='text-gray-200 text-base opacity-60 G11'>I always try to learn new things and <br></br>getting to know so much keeps me motivated</p></div>
            <img src='/images/image1.svg' className='transition-all WeebImg sm:w-64 w-52 opacity-70 sm:block hidden'></img>
        </div>
        <div className='z-20 flex justify-around items-center w-full sm:flex-row flex-col sm:gap-0 gap-16'>
            <img src='/images/image2.svg' className='GamingImg transition-all sm:w-64 w-52 opacity-70 sm:block hidden'></img>
            <div><h1 className=' SecondPageG2 G2 text-4xl font-bold SLS' style={{lineHeight:"initial"}}>Hustle</h1><p className='text-gray-200 text-base opacity-60 G22'>There were obstacles at time that seems impossible to overcome , <br></br>that’s a sign of correct path</p></div>
        </div>
        <div className='relative w-auto h-10'><button className=' LetsTalkButton text-2xl text-black font-medium  rounded-sm px-8 py-2 '>Let's Talk</button>
        <div className='z-0 relative -top-10 left-2 text-transparent text-2xl bg-gradient-to-r from-thirdGradient-100 to-thirdGradient-200 font-medium SLSS py-2 rounded-sm '>Let's Talk</div>
        </div>
        </div>
  )
}

export default SecondPage