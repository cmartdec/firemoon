import React from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import NotionAvatar from '../assets/notion.png'

export default function About() {
  return (
      <>
      <Topbar></Topbar>
      <div className="h-[1300px] w-auto flex justify-center">
         <div className="h-screen w-[800px]">
           <div className="h-[300px] flex items-center justify-center">
             <div className="flex flex-col gap-2 text-center">
             <h1 className="text-white text-6xl font-bold">Hello!👋  My name is Carlos.</h1>
             <h3 className="text-gray-300 text-3xl font-semibold">I am the <span className="text-white">founder,</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">engineer <span className="text-gray-300">and</span> </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">designer<span></span></span> at Firemoon</h3>
             </div>
           </div>
           <div className="flex justify-center">
           <div className="h-[500px] w-[600px] bg-[#212121] rounded-3xl">
             <img className="h-full w-full object-cover rounded-3xl" src={NotionAvatar} alt="" />
           </div>
           </div>
           <h3 className="text-3xl font-semibold text-gray-200 mt-12 ml-8">I started Firemoon because I think FIRE community deserves a better platform than Reddit.</h3>
           <h3 className="text-3xl font-semibold text-gray-200 mt-12 ml-8">If you are interested to see what is the tech stack behind Firemoon - <a className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600" href="/stack">Firemoon's tech stack</a></h3>
           <h3 className="text-2xl font-semibold text-white mt-12 ml-8">👉 Contact with me via <span><a className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600" href="https://twitter.com/cmartdec">Twitter, </a></span><a className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600" href="">Linkedin </a><span> or </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Email</span></h3>
           </div>
           </div>
           <Footer></Footer>
      </>
  )
}