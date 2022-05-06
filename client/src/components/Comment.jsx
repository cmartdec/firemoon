import React from 'react'
import { useState } from 'react'
import Men2 from '../assets/men2.jpg'

export default function Comment() {

    const [count, setCount] = useState(0);

    function Upvote() {
        setCount(count+1);
    }

    function Downvote() {
        setCount(count-1);
    }


  return (
      <>
      <div className="h-auto w-full bg-[#404040] rounded mt-6 flex pt-1 pb-4">
          <div className="h-full w-[50px] flex flex-col items-center justify-center">
        <button onClick={Upvote}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
           </svg>
        </button>

           <h1 className="text-white font-bold">{count}</h1>

        <button onClick={Downvote}>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
         </svg>
        </button>
       </div>
       <div className="w-full h-full px-3">
       <a href="/profile" className="flex h-[40px] items-center gap-[4px]"><img className="h-6 w-6 rounded-full" src={Men2} alt="" /><span className="text-white font-bold text-xs">cmartdec</span><p className="ml-2 text-[#9C9C9C] text-xs">18 hours ago</p></a>
       <div className="text-gray-300">
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
           Great job dude!!, I'm super glad to see you here again
       </div>
       </div>
    </div>
      </>
  )
}





