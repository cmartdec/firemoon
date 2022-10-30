import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import Men2 from '../assets/men2.jpg'
import axios from 'axios'
import Topbar from './Topbar'
import { useQuery } from 'react-query'


export default function UserInfo() {

  const [menuOpened, setMenuOpened] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (menuOpened && ref.current && !ref.current.contains(e.target)) {
        setMenuOpened(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [menuOpened]) 

  function handleMenu() {
    setMenuOpened(!menuOpened);
  }

  const ref = useRef();
  
  const handleLogOut = async(e) => {
    e.preventDefault();
    localStorage.removeItem("logged_in")
    try {
      const res = await axios.get("http://localhost:5000/api/user/logout", {withCredentials: true})
    }catch(error) {
      console.log("Something went wrong.")
    }
    navigate("/login");
  }

  return (
      <>
      <div className="flex items-center gap-3 mr-8" ref={ref}>
       <button onClick={handleMenu}>
      <h1 className="text-gray-300 font-semibold text-xs">My account</h1>
        </button>
        {menuOpened && (
         <div class="absolute mt-[170px] ml-[20px] text-base list-none bg-[#404040] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
         <ul class="py-1">
           <li>
             <a href="/profile" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
           </li>
           <li>
             <a href="/settings" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
           </li>
           <li>
             <a href="new-post" class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">New Post</a>
           </li>
           <li>
             <button onClick={handleLogOut} class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
           </li>
         </ul>
       </div> 
        )}
        </div>
      </>
  )
}




