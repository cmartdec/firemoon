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
           <div className="h-full w-auto px-[150px] flex flex-col items-center gap-20">
             <div className="flex gap-12">
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545] text-white font-bold text-3xl flex justify-center items-center cursor-pointer hover:bg-[#404040] shadow-xl">Node.js</div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545] text-white font-bold text-xl flex justify-center items-center cursor-pointer hover:bg-[#404040]">Node.js</div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             </div>
             <div className="flex gap-12">
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             </div>
             <div className="flex gap-12">
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             <div className="h-[250px] w-[300px] rounded-md bg-[#454545]"></div>
             </div>
           </div>
         </div>
       </div>
      </>
  )
}



