import React from 'react'
import Logo from '../assets/logo.svg'
import Men from '../assets/men.jpg'
import Men2 from '../assets/men2.jpg'
import Topbar from '../components/Topbar'
import { useState, useEffect, useRef } from 'react'

export default function Titlebar() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (menuOpened && ref.current && !ref.current.contains(e.target)) {
        setMenuOpened(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menuOpened]) 

  const ref = useRef();  

  function handleMenu() {
    setMenuOpened(!menuOpened);
  }


  return (
      <>
    <div className="h-[56px] bg-[#353535] flex justify-center pr-16" ref={ref}>
    <div className="container md:w-[1300px] flex items-center justify-between">
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
      <div className="flex gap-3 items-center">
        <span className="text-white font-semibold text-xs">@cmartdec</span>
        <button onClick={handleMenu}>
          <img className="w-[32px] h-[32px] rounded-full border-2 border-[#404040]" src={Men2} alt="user_photo" />
        </button>
        {menuOpened && (
         <div class="absolute mt-[170px] ml-[20px] text-base list-none bg-[#404040] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
         <ul class="py-1">
           <li>
             <a href="/self-profile" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
           </li>
           <li>
             <a href="/settings" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
           </li>
           <li>
             <a href="new-post" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">New Post</a>
           </li>
           <li>
             <a href="#" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
           </li>
         </ul>
       </div> 
        )}
      </div>
    </div>
  </div>
  </>
  )
}



