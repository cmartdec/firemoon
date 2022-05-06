import React from 'react'
import Men2 from '../assets/men2.jpg'
import { useState } from 'react'

export default function Posts() {

   const [Upvotes, setUpvotes] = useState(0);

   function Upvote() {
     setUpvotes(Upvotes+1);
   }
   function DownVote() {
     setUpvotes(Upvotes-1);
   }


  return (
      <>
       <div className="h-auto w-full bg-[#404040] rounded-md flex cursor-pointer overflow-auto hover:border border-[#212121]">
         <div className="bg-[#454545] h-auto w-[50px] flex flex-col justify-center">
           <div className="flex flex-col items-center gap-3">
             <button onClick={Upvote}>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
         </svg>
             </button>
         <p className="text-white font-semibold text-sm">{Upvotes}</p>
         <button onClick={DownVote}>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
         </svg>
         </button>
</div>
         </div>
         <a href="/post">
         <div className="w-full h-full flex flex-col py-[5px] pl-3">
           <div className="flex gap-2 items-center"><img className="h-6 w-6 rounded-full hover:border-[#212121]"src={Men2} alt="" /><p className="text-white text-xs">posted by cmartdec (6 hours ago)</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">Options in company likely to IPO and fairly clueless</h3></div>
           <div><p className="text-white text-xs mb-3">I was in the first 50 hired at a company making ~$40MM. We recently got nearly $1B valuation and will likely unicorn next round. Nasdaq has promoted us publicly and there's a high chance we'll IPO in the next couple years ...</p></div>
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





