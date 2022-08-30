import React from 'react'
import { useState } from 'react'
import Men from '../assets/men.jpg'

const Posts = () => {

    const [likeCount, setLikeCount] = useState(0);

    const handleClick = () => {
        setLikeCount(likeCount+1)
    }



    return (
        <>
         <div className="h-auto w-full bg-[#404040] rounded-md flex cursor-pointer overflow-auto hover:border border-[#212121]">
         <div className="bg-[#454545] h-auto w-[50px] flex flex-col justify-center">
           <div className="flex flex-col items-center gap-3">
               <h1 className="text-xl text-white font-semibold">{likeCount}</h1>
               <button onClick={handleClick}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white hover:text-orange-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
</svg>
</button>

             
</div>
         </div>
         <a className="w-full">
         <div className="w-full h-full flex flex-col py-[5px] pl-3 px-3">
           <div className="flex gap-2 items-center"><img className="h-6 w-6 rounded-full hover:border-[#212121]" src={Men} alt="" /><p className="text-white text-xs">posted by @mark 4 hours ago</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">Hello I'm a software engineer</h3></div>
           <div><p className="text-white text-sm mb-3">Hello...</p></div>
           <div className="flex gap-1 items-center mt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg><p className="text-[#d4d4d4] font-semibold text-xs">34 Comments</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg><p className="text-[#d4d4d4] font-semibold text-xs">Save</p>
            
           </div>
         </div>
         </a>
       </div>
        </>
    )
}



export default function Testing() {
  return (
      <>
      <div className="mt-12 px-12">
      <Posts></Posts>
      </div>
      </>
  )
}




