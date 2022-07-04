import React from 'react'
import { useRef } from 'react'
import Topbar from '../components/Topbar'
import axios from 'axios'

export default function DeleteAccount() {

    const password = useRef();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(password.current.value);
        try {
        const res = await axios.delete("http://localhost:5000/api/user/delete_account", {password: password.current.value}, {withCredentials: true})
        }catch(error) {
            console.log(error);
        }
    }
  return (
      <>
       <Topbar></Topbar>
       <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[4px] border-[#404040] mt-16 flex flex-col mb-24 shadow-sm"> 
       <p className="text-sm text-gray-300 text-center mt-3">Introduce your current password.</p>
       <p className="text-sm text-gray-300 text-center mt-3">Please make sure you want to delete your account.</p>
       <p className="text-sm text-gray-300 text-center mt-3">This account will be deleted permanently.</p>
       <div className="h-[70px] mb-3 ml-[20px] mt-6 mr-[20px]">
         <p className="text-white text-sm mb-2">Password:</p>
         <input ref={password} className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="password" />
       </div>
       <button type="submit" className="border border-red-500 hover:bg-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[2px] mb-6 mr-5 ml-5"href="#">Delete Account</button>
       </div>
       </div>
       </form>
      </>
  )
}




