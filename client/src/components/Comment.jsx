import React from 'react'
import { useState } from 'react'
import Men2 from '../assets/men2.jpg'

export default function Comment({ content, commenter }) {

    const [count, setCount] = useState(0);

    function Upvote() {
        setCount(count+1);
    }

    function Downvote() {
        setCount(count-1);
    }

    console.log(commenter);


  return (
      <>
      <div className="h-auto w-full bg-[#404040] rounded mt-6 flex pt-1 pb-4 pl-2">
       <div className="w-auto h-full px-3">
       <a href={`/users/${commenter}`} className="flex h-[40px] items-center gap-[4px]"><img className="h-6 w-6 rounded-full" src={Men2} alt="" /><span className="text-white font-bold text-xs">{commenter}</span><p className="ml-2 text-[#9C9C9C] text-xs">18 hours ago</p></a>
       <div className="text-gray-300 w-full">
         {content}
       </div>
       </div>
    </div>
      </>
  )
}





