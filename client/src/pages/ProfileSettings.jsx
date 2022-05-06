import React from 'react'
import Titlebar from '../components/Titlebar'
import HeaderProfile from '../components/HeaderProfile'
import Men from '../assets/men.jpg'
import Footer from '../components/Footer'

/*
<div className="flex">
       <div className="h-[70px] mb-6 ml-[12px] grow">
       <button className="border border-amber-700 text-white font-bold py-[10px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">CHANGE PASSWORD</button>
       </div>
       <div className="h-[70px] mb-6 ml-[12px] grow">
       <button className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-[10px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">DELETE ACCOUNT</button>
       </div>
       </div>

*/




export default function ProfileSettings() {



  return (
    <>
      <Titlebar></Titlebar>
      <div className="w-full flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[2px] border-[#404040] mt-8 flex flex-col mb-6 shadow-sm rounded"> 
       <header className="h-[170px] w-full  flex justify-center items-center">
         <button className="hover:opacity-50"><img src={Men} className="h-[120px] w-[120px] rounded-full border-[4px] border-[#404040]" alt="">
           </img></button>
       </header>
       <div className="h-[1px] w-full border-t-[2px] border-[#404040]"></div>
       <div className="h-[70px] mb-12 md:mb-6 ml-[20px] mt-6 mr-[20px]">
         <p className="text-white text-sm">Username:</p>
         <input className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="text" placeholder="cmartdec"/>
         <span>
          <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[8px] ml-[8px]"href="#">CHANGE</button>
         </span>
       </div>
       <div className="h-[130px] mb-12 md:mb-6 ml-[20px]">
         <p className="text-white text-sm">Bio:</p>
         <input className="h-[100px] w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="text" />
          <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">CHANGE</button>
       </div>
       <div className="h-[70px] mb-12 md:mb-6 ml-[20px]">
         <p className="text-white text-sm">Email Address:</p>
         <input className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="text" placeholder="cmartdec@gmail.com"/>
          <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[8px] ml-[8px]"href="#">CHANGE</button>
       </div>
       <div className="h-[1px] w-full border-t-[2px] border-[#404040] mb-6"></div>
       <a className="hover:bg-gradient-to-r from-amber-700 to-red-500 border border-amber-700 text-white font-bold py-[7px] px-3 rounded text-xs mt-[8px] ml-[18px] mr-[18px] mb-3 inline-flex pl-[150px] items-center"href="/change-password">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px] mr-3 mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
         <span>CHANGE PASSWORD</span></a>
       <button className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-[7px] px-3 rounded text-xs mt-[8px] ml-[18px] mr-[18px] mb-8 inline-flex pl-[150px] items-center"href="#">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
         <span>DELETE ACCOUNT</span></button>
      </div>
    </div>
    <Footer></Footer>
    

      </>
  ) 



  }