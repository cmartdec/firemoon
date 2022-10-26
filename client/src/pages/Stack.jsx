import React from 'react'
import Topbar from '../components/Topbar'

export default function Stack() {
  return (
      <>
      <Topbar></Topbar>
       <div className="h-screen w-auto flex justify-center">
         <div className="h-screen w-[1400px]">
           <div className="h-[300px] flex items-center justify-center">
             <div className="flex flex-col gap-2 text-center">
             <h1 className="text-white text-6xl font-bold">The Firemoon Stack</h1>
             <h3 className="text-gray-300 text-xl font-semibold">Look at what technologies I used to build Firemoon</h3>
             </div>
           </div>
           <div className="h-full w-auto bg-red-500"></div>
         </div>
       </div>
      </>
  )
}



