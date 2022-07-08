import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import Men2 from '../assets/men2.jpg'
import { useSelector, useDispatch } from 'react-redux'
import {logOut} from '../redux/authSlice'
import axios from 'axios'


export default function UserInfo() {

  const [menuOpened, setMenuOpened] = useState(false);
  const user = useSelector((state) => state.currentUser);
  
  const dispatch = useDispatch();
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

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  }


  return (
      <>
      <div className="flex items-center gap-3 mr-8" ref={ref}>
      <span ref={ref} className="text-gray-300 font-semibold text-xs">My account</span>
       <button onClick={handleMenu}>
          <img className="w-[32px] h-[32px] rounded-full border-2 border-[#404040]" src={Men2} alt="user_photo" />
        </button>
        {menuOpened && (
         <div class="absolute mt-[170px] ml-[20px] text-base list-none bg-[#404040] rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
         <ul class="py-1">
           <li>
             <a href={user.username} class="block py-2 px-4 text-xs text-[#AEAEAE] font-bold hover:bg-[#454545] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
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




