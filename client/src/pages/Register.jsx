import React from 'react'
import { useState, useRef } from 'react'
import { Navigate, useNavigate } from 'react-router'
import Topbar from '../components/Topbar'
import Icon from '../assets/icon2.png'
import Footer from '../components/Footer'
import axios from 'axios';


/* https://github.com/swati1707/Authentication-using-JWT-in-MERN */ 




export default function Register() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const res = await axios.post("http://localhost:5000/api/user/signup", {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value
    })
    navigate("/login");
    }catch(error) {
      setError(true);
      setErrorMessage(error.response.data.msg);
    }

  }

  return (
    <>
       <Topbar></Topbar>
    <div className="container mx-auto h-[550px] w-full bg-[#303030] flex justify-center items-center">
      <div className="h-[400px] w-[1000px] flex  justify-center">
        <div className="h-[404px] w-[450px] bg-[#353535] hidden sm:flex flex-col justify-center items-center rounded">
          <img src={Icon} alt="icon_bounce" width="150" className="animate-bounce"/>
          <div className="h-[120px] w-[360px] bg-[#2E4250] border border-white mt-[65px] rounded py-3">
            <p className="text-white font-bold text-sm mr-3 ml-3 mt-[2px]">Welcome to Firemoon 👋, a platform for people whose aim is achieving Financial Independence and Early Retirement. Feel free to create an account and start your Fire journey with us</p>
          </div>
        </div>
        <div className="h-full w-[250px] bg-[#404040] rounded">
          <div className="h-[60px] w-full flex justify-center items-center">
            <div className="flex flex-col">
            <p className="text-white font-bold text-xl">Create an Account</p>
            {error &&
            <p className="text-center text-red-600 text-xs mt-1">{errorMessage}</p>
             }
            </div>
          </div>
          <form onSubmit={handleSubmit} class="bg-[#404040] px-8 pt-2 pb-8 mb-4 h-[344px]">
    <div class="mb-4">
      <label className="block text-[#AEAEAE] text-sm font-bold mb-2" for="username">
        Username:
      </label>
      <input pattern=".{3,}" title="3 characters minimum" required ref={username} type="text" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 text-sm" />
    </div>
    <div class="mb-4">
      <label className="block text-[#AEAEAE] text-sm font-bold mb-2" for="username">
        Email:
      </label>
      <input required ref={email} type="email" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 text-sm" />
    </div>
    <div class="mb-4">
      <label class="block text-[#AEAEAE] text-sm font-bold mb-2" for="password">
        Password:
      </label>
      <input pattern=".{6,}" title="6 characters minimum" required ref={password} type="password" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 text-sm" />
    </div>
    <div className="flex justify-center">
     <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs hover:-translate-y-1"href="#">SIGN UP</button>
    </div>
    <p className="text-white text-xs mt-3 text-center">Already signed up? <span className="text-blue-400"><a href="/login">Login</a></span></p>
  </form>
      </div>
      </div>
      </div>
    <Footer></Footer>
    </>
  )
}




