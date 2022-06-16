import React from 'react'
import { useRef } from 'react'
import Topbar from '../components/Topbar'
import Icon from '../assets/icon2.png'
import Footer from '../components/Footer'

/* BOILERPLATE

<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-[5px] px-3 border border-orange-500 rounded w-[110px]"href="#">Login</button>

*/


export default function Login() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const email = useRef();
  const password = useRef();




  return (
    <>
    <Topbar></Topbar>
    <div className="container mx-auto h-[550px] w-full bg-[#303030] flex justify-center items-center">
      <div className="h-[400px] w-[1000px] flex flex-wrap justify-center">
        <div className="h-[404px] md:w-[450px] bg-[#353535] flex flex-col justify-center items-center rounded">
          <img src={Icon} alt="icon_bounce" width="150" className="animate-bounce"/>
          <p className="mt-8 text-white font-bold md:text-4xl">Welcome back!</p>
        </div>
        <div className="h-full w-[250px] bg-[#404040] rounded">
          <div className="h-[60px] w-full flex justify-center items-center">
            <div className="flex flex-col items-center">
            <p className="text-white font-bold text-xl mt-3">Log in</p>
            </div>
          </div>
          <form class="bg-[#404040] px-8 pt-2 pb-8 mb-4 h-[344px]">
    <div class="mb-4">
      <label className="block text-[#AEAEAE] text-sm font-bold mb-2" for="username">
        Email:
      </label>
      <input ref={email} required type="email" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 text-sm" />
    </div>
    <div class="mb-4">
      <label class="block text-[#AEAEAE] text-sm font-bold mb-2" for="password">
        Password:
      </label>
      <input ref={password} pattern=".{6,}" title="6 characters minimum" required type="password" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 text-sm" />
      <div className="flex justify-end">
       <a className="text-sm text-gray-500" href="#">Forgot password?</a>
      </div>
    </div>
    <div className="flex justify-center">
    <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs hover:-translate-y-1"href="#">LOG IN</button>
    </div>
    <p className="text-white text-xs mt-3 text-center">Don't have an account yet? <span className="text-blue-400"><a href="/signup">Signup</a></span></p>
  </form>
      </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}




