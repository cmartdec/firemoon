import React from 'react'
import { useState } from 'react'
import Topbar from '../components/Topbar'

export default function Help() {

  const color = "#303030"
  document.body.style.backgroundColor = color;
  
  const [state, setState] = useState(false);

  var message = "CLICK TO SHOW THE SUPPORT EMAIL ADDRESS"
  var email_address = "support@firemoon.app"

  function handleClick() {
    setState(true)
  }

  return (
    <>
    <Topbar></Topbar>
    <div className="h-screen w-auto flex justify-center pt-12">
     <div className="h-[200px] w-[1000px] border-[4px] border-[#404040] flex flex-col items-center pt-8 rounded">
       <header className="text-white font-bold text-2xl">
         Are you having problems?
       </header>
       <p className="text-[#9C9C9C] text-sm">Please tell us what is your problem by contacting us via email</p>
       <button onClick={handleClick} className="mt-6  w-full max-w-[600px] font-bold text-white rounded bg-gradient-to-r from-amber-700 to-red-500 px-3 py-[3px]">{state ?  email_address : message}</button>
     </div>
    </div>
    </>
 
  )
}


