import React from 'react'
import Titlebar from '../components/Titlebar'
import Footer from '../components/Footer'

export default function Contribute() {
  return (
    <>
    <Titlebar></Titlebar>
    <div className="h-auto w-screen flex justify-center pt-12 mb-24">
    <div className="h-[700px] w-[1000px] border-[2px] border-[#404040] px-12 pt-8 flex flex-col rounded">
      <header className="h-auto w-full">
        <h1 className="text-white text-4xl font-bold">Contribute</h1>
        <p className="text-[#B7B7B7] font-semibold">Want to write content and be featured on the interviews section?, Tell us your story, new places you discovered,</p> 
        <p className="text-[#B7B7B7] font-semibold mb-8">stuff that could help people in their Fire journey, we would be so happy to learn from you!</p>
      </header>
        <textarea className="h-[450px] w-full border-none rounded bg-[#262626] mb-6 text-white border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" placeholder="Text"></textarea>
        <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs w-full"href="/signup">CONTRIBUTE</button>
    </div>
    </div>

    <Footer></Footer>
   
    </>
 
  )
}