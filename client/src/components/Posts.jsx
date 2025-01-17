import React from 'react'
import { useState } from 'react'
import moment from 'moment'
import axios from 'axios'
import parse from 'html-react-parser'
axios.defaults.withCredentials = true;

export default function Posts({title, data, id, date, author, likeCount, comments }) {
    
    const [likeCounter, setLikeCounter] = useState(likeCount);
    const body_data = data.slice(0,400);
    const date_created = moment.utc(date).local().startOf('seconds').fromNow()

    const handleLikeButton = async() => {
     const res = await axios.post(`http://localhost:5000/api/post/like/${id}`) 
     setLikeCounter(likeCounter+1)
    }
    console.log(likeCounter);

    const handleUnLikeButton = async() => {
      const res = await axios.post(`http://localhost:5000/api/post/unlike/${id}`)
      setLikeCounter(likeCounter-1)
    }

  return (
      <>
       <div className="h-auto w-full bg-[#404040] rounded-md flex cursor-pointer overflow-auto hover:border border-[#212121]">
         <div className="bg-[#454545] h-auto w-[50px] flex flex-col justify-center">
           <div className="flex flex-col items-center gap-3">
             <button onClick={handleLikeButton}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
             </button>
             <h1 className="text-white font-semibold">{likeCounter}</h1>
             <button onClick={handleUnLikeButton}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
              </button>

      </div>
         </div>
         <a className="w-full" href={"/post/" + id}>
         <div className="w-full h-full flex flex-col py-[5px] pl-3 px-3">
           <div className="flex gap-2 items-center mt-2"><p className="text-white text-xs">Posted by {author} {date_created}</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">{title}</h3></div>
           <div><p className="text-white text-sm mb-3">{parse(body_data)}...</p></div>
           <div className="flex gap-1 items-center mt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg><p className="text-[#d4d4d4] font-semibold text-xs">{comments} comments</p>
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





