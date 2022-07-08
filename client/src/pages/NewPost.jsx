import React, { useEffect } from 'react'
import { useRef } from 'react'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import TextareaAutosize from 'react-textarea-autosize'

export default function NewPost() {


    const title = useRef();
    const data = useRef();

    const color = "#303030"
    document.body.style.backgroundColor = color;

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <>
     <Topbar></Topbar>
     <div className="flex justify-center">
       <form onSubmit={handleSubmit}>
       <div className="w-[550px] md:w-[800px] h-auto flex flex-col items-center pt-24 gap-20 mb-40">
         <input ref={title} className="w-full h-[60px] bg-[#272727] hover:bg-[#212121] text-gray-300 text-xl font-bold border-none rounded-md focus:ring-0" placeholder="Enter title" type="text" />
         <TextareaAutosize ref={data} className="bg-[#272727] hover:bg-[#212121] text-gray-200 focus:ring-0 border-none rounded-md w-full resize-none" minRows="6" placeholder="Enter body"></TextareaAutosize>
         <div className="w-full h-auto rounded-md bg-[#353535] py-4 px-3 flex gap-3">
           <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold text-sm rounded-md px-2 py-2">CREATE POST</button>
           <button className="border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-500 border text-white font-bold text-sm rounded-md px-2 py-2">SAVE AS DRAFT</button>
         </div>
       </div>
       </form>
     </div>
     <Footer></Footer>
    </>
    
  )
}




