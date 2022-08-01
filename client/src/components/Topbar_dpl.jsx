import React from 'react'
import Logo from '../assets/logo.svg'

export default function Topbar_dpl() {
  const color = "#353535"
  document.body.style.backgroundColor = color;

  return (
      <>
    <div className="h-[56px] bg-[#353535] flex justify-center">
    <div className="container md:w-[1300px] w-[100vw] flex items-center justify-between">
      <nav className="flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
       </svg>
       <a className="font-sans text-sm text-white mr-3 font-bold" href="/interviews">Interviews</a>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
       </svg>
       <a className= "font-sans text-sm text-white mr-3 font-bold" href="/contribute">Contribute</a>
      </nav>
      <a href="/">
       <img src={Logo} alt="logo" width="150" />
      </a>
      <div className="flex items-center">
      <a className="font-sans text-sm text-white mr-3 font-bold" href="/faq">FAQ</a>
       <a className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs"href="/signup">SIGN UP</a>
       <a className="ml-[10px] text-white font-bold py-[8px] px-3 rounded text-xs border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-800" href="/login">LOG IN</a>
      </div>
    </div>
  </div>
  </>
  )
}




