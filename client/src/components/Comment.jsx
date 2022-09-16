import React from 'react'
import { useState } from 'react'
import Men2 from '../assets/men2.jpg'
import moment from 'moment'

export default function Comment({ content, commenter, date }) {

    const date_created = moment.utc(date).local().startOf('seconds').fromNow()

    console.log(date_created);


  return (
      <>
      <div className="h-auto w-full bg-[#404040] rounded mt-6 flex pt-1 pb-2 pl-2">
       <div className="w-auto h-full px-3">
       <a href={`/users/${commenter}`} className="flex h-[40px] items-center gap-[4px]"><img className="h-6 w-6 rounded-full" src={Men2} alt="" /><span className="text-white font-bold text-xs">{commenter}</span><p className="ml-2 text-[#9C9C9C] text-xs">{date_created}</p></a>
       <div className="text-gray-300 w-full">
         {content}
       </div>
       <div className="flex gap-2">
       <div className="flex gap-2 items-center mt-3 rounded justify-center w-[100px] hover:bg-[#303030] cursor-pointer">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
<span><p className="text-white text-sm">Reply</p></span>
       </div>
       <div className="flex gap-1 mt-3 items-center hover:cursor-pointer hover:bg-[#353535] px-6 rounded">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-white w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
</svg>
<span>
  <p className="text-gray-200 text-sm">Report</p>
</span>

       </div>
</div>
       </div>
    </div>
      </>
  )
}





