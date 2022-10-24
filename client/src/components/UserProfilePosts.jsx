import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser'

export default function UserProfilePosts({ title, data, author, date, likeCount, id, comments }) {
  console.log(title, data)


  const date_created = moment.utc(date).local().startOf('seconds').fromNow()
  return (
      <>
      <a href={"/post/" + id}>
      <div className="h-auto w-[800px] bg-[#404040] rounded-md flex cursor-pointer overflow-auto pl-3">
         <div className="w-full h-full flex flex-col mb-5 pl-3">
           <div className="flex gap-2 items-center"><p className="text-white text-xs mt-6">Posted by {author} {date_created}</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">{title}</h3></div>
           <div><p className="text-white text-xs mb-3">{parse(data)}</p></div>
           <div className="flex gap-1 items-center mt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg><p className="text-[#d4d4d4] font-semibold text-xs">{comments} Comments</p>
           </div>
         </div>
       </div>
       </a>
      </>
  )
}
