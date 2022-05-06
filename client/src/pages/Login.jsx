import React from 'react'
import Topbar from '../components/Topbar'
import Icon from '../assets/icon2.png'
import Logo from '../assets/hahaha.svg'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

/* BOILERPLATE

<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-[5px] px-3 border border-orange-500 rounded w-[110px]"href="#">Login</button>

*/





export default function Login() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

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
            <p className="text-white font-bold text-xl">Log in</p>
          </div>
          <form class="bg-[#404040] px-8 pt-2 pb-8 mb-4 h-[344px]">
    <div class="mb-4">
      <label className="block text-[#AEAEAE] text-sm font-bold mb-2" for="username">
        Email:
      </label>
      <input type="email" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0" />
    </div>
    <div class="mb-4">
      <label class="block text-[#AEAEAE] text-sm font-bold mb-2" for="password">
        Password:
      </label>
      <input type="password" className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:shadow-outline bg-[#262626] border-[#404040] border-transparent focus:border-transparent focus:bg-[#212121] focus:ring-0 mb-2" />
      <div className="flex justify-end">
       <a className="text-sm text-gray-500" href="">Forgot password?</a>
      </div>
    </div>
    <div className="flex justify-center">
    <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs"href="#">LOG IN</button>
    </div>
    <p className="text-white text-xs mt-3 text-center">Don't have an account yet? <span className="text-blue-400"><a href="">Signup</a></span></p>
  </form>
      </div>
      </div>
      </div>
    <footer className="bg-[#303030] border-t-4 border-[#353535] h-[350px] w-full flex flex-col items-center">
      <div className="h-[110px] w-[700px] bg-[#303030] mt-[30px]">
        <p className="text-white font-bold text-2xl text-center">Keep in touch with the community</p>
        <p className="text-[#AEAEAE] text-center text-sm font-bold ">Recieve last updates and discussions that help you in your Fire journey</p>
        <div className="flex justify-center">
         <input type="text" className="appearance-none border rounded w-[500px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#262626] border-[#404040] mt-3 border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" placeholder="Email address"/>
         <span>
          <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[10px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">SUBMIT</button>
         </span>
        </div>
      </div>
      <div className="h-[200px] w-[600px] bg-[#303030] py-3">
      <a className="flex justify-center">
        <img src={Logo} alt="logo4" width="100" />
        <span className="mt-[4px] ml-[3px] text-sm text-white">by</span>
        <a className="text-white font-bold bg-blue-500  rounded text-xs ml-[12px] mt-[6px]" href="https://twitter.com/cmartdec">
          @cmartdec
        </a>
        </a>
        <div className="flex justify-center">
        <div className="w-[300px]">
          <p className="text-[#AEAEAE] text-sm text-center mt-2">Connect with the Firemoon community. Learn from others, achieve Financial Independence and Retire Early</p>
        </div>
        </div>
        <div className="flex justify-center w-full bg-[#303030] mt-3  gap-3">
          <div><TwitterIcon color="action"></TwitterIcon></div>
          <div><FacebookIcon color="action"></FacebookIcon></div>
        </div>
      </div>
    </footer>
    </>
  )
}




