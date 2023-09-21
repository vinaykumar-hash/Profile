"use client"
import React from 'react'
import { useEffect } from 'react'

const ContactPage = () => {
    async function handleclick(){
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
        const data = {name,email,message}
        if(name != "" && email!="" && message!=""){
          const res = await fetch("/api/test",{
            method:"POST",
            body: JSON.stringify(data)
          })
        }else{
          alert("Please !! Fill Form Carefully")
        }
    }

    useEffect(()=>{
        for(let i=0;i<20;i++){
            let Star = document.createElement("div")
            Star.style.height = "2px"
            Star.style.width = "2px"
            Star.style.position = "absolute"
            Star.style.top = `${Math.random()*100}%`
            Star.style.left = `${Math.random()*100}%`
            Star.style.background = "white"
            Star.classList.add("animate-pulse")
            document.querySelector(".ContactPage").appendChild(Star)
        }
        document.querySelector(".ContactPage").addEventListener("click",async function (event) {
            if (event.target.classList.contains("SendButton")) {
                const name = document.getElementById("name").value
                const email = document.getElementById("email").value
                const message = document.getElementById("message").value
                const data = {name,email,message}
                if(name != "" && email!="" && message!=""){
                const res = await fetch("/api/test",{
                    method:"POST",
                    body: JSON.stringify(data)
                })
                }else{
                alert("Please !! Fill Form Carefully")
                return
                }
                let ContactForm = document.querySelector(".ContactFormIn")
                ContactForm.innerHTML = "";
                ContactForm.style.transform = "ScaleY(0)"
                setTimeout(function(){
                    ContactForm.style.background = "#FFEEA3";
                    ContactForm.style.transform = "ScaleY(1)"
                    let Envlope = document.createElement("div");
                    Envlope.classList.add("w-full","h-2/3","bg-contactColor-100","absolute", "-top-10", "left-0", "border-b", "border-black/50","transition-all")
                    Envlope.style.borderRadius = "30% 70% 48% 52% / 0% 0% 100% 100%"
                    Envlope.style.transform = "rotate3d(1, 0, 0, 90deg)"
                    ContactForm.appendChild(Envlope)
                    setTimeout(function(){
                        Envlope.style.transform = "rotate3d(1, 0, 0, 0deg)"
                        Envlope.classList.remove("-top-10")
                        Envlope.classList.add("top-0")
                        ContactForm.style.transition = "all linear 200ms"
                        setTimeout(function(){
                            let Moon = document.querySelector(".Moon")
                            let rect = Moon.getBoundingClientRect();
                            // ContactForm.style.position = "absolute"
                            ContactForm.style.transform = "Scale(0)"
                            document.querySelector(".SuccessMessage").style.opacity = "1"
                            document.querySelector(".SuccessMessage").style.transform = "Scale(1)"
                        },500)
                    },500)
                },500)
            }
        });
        
        let Moon = document.querySelector(".Moon")
        let rect = Moon.getBoundingClientRect();
        setTimeout(function(){
            document.querySelector(".ContactPage").innerHTML += `<img width="80" height="80" src="https://img.icons8.com/office/80/secured-letter--v1.png" alt="secured-letter--v1" class="TestMail" style="position:absolute;top:${Math.random()*100}%;left:${Math.random()*100}%;transition:all cubic-bezier(0.42, 0, 1,-0.09) 1000ms"/>`
            setInterval(function(){
                Moon = document.querySelector(".Moon")
                rect = Moon.getBoundingClientRect();
                document.querySelector(".TestMail").style.top = `${rect.top}px`
                document.querySelector(".TestMail").style.left = `${rect.left}px`
                document.querySelector(".TestMail").style.transform = "scale(0)"
                setTimeout(function(){
                    document.querySelector(".TestMail").style.top = `${Math.random()*100}%`;
                    document.querySelector(".TestMail").style.left = `${Math.random()*100}%`;
                    setTimeout(function(){
                        document.querySelector(".TestMail").style.transform = `Scale(1)`;
                    },900)
                },1000)
            },3000)
        },0)
        
    },[])
  return (
    <div className='ContactPage sm:block hidden h-screen w-screen bg-black relative'>
        <div className='Moon h-20 w-16 bg-black absolute mt-20 ml-20 z-40 border border-white' style={{borderRadius:"50%"}}></div>
        <div className=' h-20 w-16 bg-yellow-500 absolute mt-20 ml-20 blur z-30 animate-pulse' style={{borderRadius:"50%"}}></div>
        {/* <img width="80" height="80" src="https://img.icons8.com/office/80/secured-letter--v1.png" alt="secured-letter--v1"/> */}
        <div className=''></div>
        <div className='ContactForm h-full w-full flex justify-center items-center absolute'>
            <div className='text-white opacity-0 scale-0 SuccessMessage transition-all'>"Successfully Send"</div>
            <div className='ContactFormIn absolute h-96 w-3/5 bg-gray-950 border-2 border-contactColor-100 z-40 p-8'>
                <h3 className='text-4xl text-contactColor-100 font-semibold SLS'>Contact</h3>
                <div className='h-full w-full flex justify-start items-center flex-col mt-6 relative'>
                    <div className=' w-full flex justify-center items-center text-lg'>
                        <input type='name' className='w-full mx-2 border-b border-b-contactColor-100 bg-transparent text-white outline-none' id='name' placeholder='Name'></input>
                        <input type='email' className='w-full mx-2 border-b border-b-contactColor-100 bg-transparent text-white outline-none' id='email' placeholder='Email'></input>
                    </div>
                    <textarea className='z-40 text-white w-full mx-2 bg-white/5 my-2 p-2 rounded-sm max-h-full h-full outline-none text-lg ' id='message' placeholder='Message'></textarea>
                    <button onClick={handleclick} className='SendButton bg-contactColor-100 px-2 py-1 rounded-sm'>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage