import React from 'react'
import { useState } from 'react'
import Topbar from '../components/Topbar'
import Comment from '../components/Comment'
import CommentBoxDisallowed from '../components/CommentBoxDisallowed'
import CommentBox from '../components/CommentBox'

export default function Post(props) {



  const color = "#303030"
  document.body.style.backgroundColor = color;


  const [count, setCount] = useState(0);
  const [isLogged, setIsLogged] = useState(true);

  function Upvote() {
    setCount(count+1);
  }

  function Downvote() {
    setCount(count-1);
  }


  return (
    <>
    <Topbar></Topbar>
    <div className="h-auto w-full flex justify-center">
      <div className="w-full max-w-[1024px] h-full flex flex-col items-center pt-12">
        <div className="h-auto w-full bg-[#404040] rounded mb-12 flex">
          <div className="h-full w-[60px] flex flex-col justify-start items-center pt-3">
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
           
          <div className="flex flex-col w-full">
          <p className="text-white text-xs mt-4 ml-3">Posted by @cmartdec a year ago</p>
          <h1 className="text-white font-bold text-2xl mt-1 ml-2">Options for the company to IPO in clueless fairly </h1>
          <div className="flex flex-col ml-2">
            <p className="text-gray-300">
              Text
            </p>
          </div>
          <div className="container mx-auto flex gap-[2px]">
            <button className="m-2 mb-4 text-xs rounded-lg bg-[#303030] py-[4px] px-4 text-white mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[12px] w-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
               <p>Save</p>
              </div>
            </button>
            <button className="m-2 mb-4 text-xs rounded-lg bg-[#303030] py-[4px] px-4 text-white mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[12px] w-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <p>24 Comments</p>
              </div>
            </button>
          </div>
         </div>
        </div>

        {isLogged ? <CommentBox></CommentBox> : <CommentBoxDisallowed></CommentBoxDisallowed>}
        
        
        <div className="flex flex-col gap-8">
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>

        </div>
      </div>
    </div>
     
    </>

  )
}





