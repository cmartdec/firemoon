import React from 'react'
import { useState, useRef } from 'react'
import Logo from '../assets/hahaha.svg'
import TwitterIcon from '@material-ui/icons/Twitter'
import Titlebar from '../components/Titlebar'
import FacebookIcon from '@material-ui/icons/Facebook'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer'
import axios from 'axios'


export default function ForgotPassword() {


  const email = useRef();
  const [isError, setIsError] = useState(false);


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/forgot", { email: email.current.value });
      toast.success("Please check your email inbox", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        pauseOnHover: false
      })
      email.current.value = "";
    }catch(error){
      console.log(error);
      setIsError(true);
    }
  }

  return (
      <>
      <Titlebar></Titlebar>
      <ToastContainer></ToastContainer>
      <div className="w-[100vw] flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[2px] border-[#404040] mt-24 flex flex-col mb-[200px] shadow-sm rounded"> 
      <form onSubmit={handleSubmit} className="flex flex-col">
        {
          isError && 
          <p className="text-sm text-center text-red-500 mt-2">Something went wrong</p>
        }
       <div className="h-[70px] ml-[20px] mb-2 mt-2 mr-[20px]">
         <p className="text-white text-sm text-center mb-3 mt-2">Enter the email address you signed up with.</p>
         <input ref={email} required type="email" className="appearance-none w-[370px] rounded bg-[#252525] border-none text-white text-sm focus:outline-none focus:shadow-outline ring-0 border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" placeholder="example@example.com"/>
       </div>
       <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mb-6 mt-2 mr-5 ml-5"href="#">Submit</button>
       </form>
       </div>
       </div>
        <Footer></Footer>
       

      </>

  )
}




