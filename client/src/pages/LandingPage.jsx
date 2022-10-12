import React from 'react'
import Group1 from '../assets/Group1.svg'

export default function LandingPage() {
  return (
      <>
       <div className="h-[250px] w-full bg-[#303030] flex items-center justify-center">
        <img className="h-[150px] w-[150px] cursor-pointer" src={Group1} alt="" />
      </div>
      <div className="h-screen w-full px-12 bg-[#303030] flex justify-center">
        <div className="flex flex-col items-center w-[600px]">
        <div className="flex ml-8 justify-center">
          <h1 className="text-8xl text-white font-bold">Fire</h1>
          <h1 className="text-8xl text-white">moon</h1>
        </div>
        <h3 className="text-center mt-8 ml-8">
          <p className="text-white text-xl font-semibold">The new way to connect with the Fire community</p>
          <p className="text-white text-xl font-semibold">Can't wait? Introduce your email to stay tuned</p>
        </h3>
        <div className="w-auto flex justify-center mt-8 gap-2">
        <input className="w-[350px] bg-[#252525] border-none hover:bg-[#212121] text-white rounded-md focus:ring-0 focus:border-transparent ml-8" type="email" placeholder="Enter email address" required />
        <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs hover:opacity-75">Stay tuned</button>
        </div>
        <div className="w-full flex justify-end mr-[120px]">
          <div className="flex gap-1 items-center mt-3">
            <p className="text-white text-sm">
          Want to learn more from Firemoon? Read our 
            </p>
            <a className="underline text-white text-sm" href="/faq">FAQs</a>
          </div>
        </div>
      </div>
      </div>

      </>
  )
}





