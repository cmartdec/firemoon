import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Reset() {
    const color = "#303030"
    document.body.style.backgroundColor = color;

    const new_password = useRef();
    const { token } = useParams();
    const [isError, setIsError] = useState(false);


    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
       const res = await axios.put(`http://localhost:5000/api/user/reset/${token}`, { password: new_password.current.value });
       toast.success("Password succesfully updated!", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        pauseOnHover: false
      })
      } catch (error) {
        setIsError(true);
        console.log(error)
      }
    }

  return (
      <>
        <Topbar></Topbar>
        <ToastContainer></ToastContainer>
        <div className="w-full pt-24 flex justify-center items-center">
        <div className="w-auto h-auto bg-[#353535] border-[2px] border-[#404040] mt-24 flex flex-col mb-[200px] shadow-sm rounded"> 
      <form onSubmit={handleSubmit} className="flex flex-col">
       <div className="h-[70px] ml-[20px] mb-3 mt-6 mr-[20px]">
         <p className="text-white font-bold text-2xl text-center mb-3">Set your new password.</p>
         <input ref={new_password} required type="password" className="appearance-none w-[370px] rounded bg-[#252525] border-none text-white text-sm focus:outline-none focus:shadow-outline ring-0 border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" placeholder="password"/>
       </div>
        <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mb-6 mt-4 mr-5 ml-5" href="#">Submit</button>
        <a href="/login" className="text-center text-gray-200 font-bold text-xs mb-3">Back to <span className="text-orange-400"> log in</span></a>
       </form>
       </div>
        </div>
        <Footer></Footer>
      </>
  )
}



