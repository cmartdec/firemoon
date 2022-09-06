import React from 'react'

export default function SavedPosts({ title, data, author }) {
  return (
      <>
      <div className="h-auto w-[800px] bg-[#404040] rounded-md flex cursor-pointer overflow-auto">
          <div className="h-auto w-[40px] flex flex-col justify-center">
           <div className="flex flex-col items-center gap-3">
             <button>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
             </svg>
             </button>
            <p className="text-white font-semibold text-sm"></p>
            <button>
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
             </svg>
            </button>
           </div>
         </div>
         <div className="w-full h-full flex flex-col mb-5 pl-3">
           <div className="flex gap-2 items-center"><p className="text-white text-xs mt-6">Posted by {author}</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">{title}</h3></div>
           <div><p className="text-white text-xs mb-3">{data}</p></div>
           <div className="flex gap-1 items-center mt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg><p className="text-[#d4d4d4] font-semibold text-xs">34 Comments</p>
            <button className="flex items-center gap-1 rounded border border-red-500 ml-5 px-1 text-gray-300 hover:text-white hover:bg-red-500 pr-5 py-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p className="text-sm text-center">Delete saved post</p>
            </button>
           </div>
         </div>
       </div>
       
      </>
  )
}




