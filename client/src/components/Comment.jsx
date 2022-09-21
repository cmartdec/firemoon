import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Men2 from '../assets/men2.jpg'
import moment from 'moment'
import axios from 'axios'
import { useQuery } from 'react-query'
axios.defaults.withCredentials = true;



export default function Comment({ content, commenter, date, commenterId, commentId }) {

    const date_created = moment.utc(date).local().startOf('seconds').fromNow()

    const [isAuthor, setIsAuthor] = useState();
    const [isOpened, setIsOpened] = useState(false);
    const [isReplyOpened, setIsReplyOpened] = useState(false);

    const navigate = useNavigate();

    useEffect(async() => {
      const data = await axios.get("http://localhost:5000/api/user/me", { withCredentials: true });
      if(data.data._id === commenterId) {
        setIsAuthor(true);
      } else {
        setIsAuthor(false);
      }
    }, [])

    const handleDeleteRequest = async() => {
      try {
       await axios.delete(`http://localhost:5000/api/post/deleteComment/${commentId}`);
       window.location.reload(true);
      } catch(error) {
        navigate("/")
        console.log(error);
      }
    }

    const DeleteSection = () => {
       return (
         <>
          {
            isOpened ?
            <div className="flex gap-3 h-auto items-center ml-8">
             <h1 className="text-white text-sm">Are you sure?</h1>
             <div className="flex gap-2">
             <button onClick={handleDeleteRequest} className="text-white rounded bg-red-500 px-2 text-sm py-0 hover:bg-red-600">Yes</button>
             <button onClick={() => setIsOpened(false)} className="text-white rounded bg-[#353535] px-2 text-sm py-0 hover:bg-[#303030]">No</button>
             </div>
            </div>
             : 
             <button onClick={() => setIsOpened(true)}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-500 cursor-pointer hover:text-red-600">
     <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
   </svg>
   </button>
          }
         </>
       )
    }
     
    console.log(isReplyOpened)


  return (
      <>
      <div className="h-auto w-full bg-[#404040] rounded mt-6 flex pt-1 pb-2 pl-2">
       <div className="w-auto h-full px-3">
         <div className="flex gap-3 items-center">
       <a href={`/users/${commenter}`} className="flex h-[40px] items-center gap-[4px]"><img className="h-6 w-6 rounded-full" src={Men2} alt="" /><span className="text-white font-bold text-xs">{commenter}</span><p className="ml-2 text-[#9C9C9C] text-xs">{date_created}</p></a>
       {
         isAuthor && <DeleteSection></DeleteSection>
       }
       </div>
       <div className="text-gray-300 w-full">
         {content}
       </div>
      <div onClick={() => { setIsReplyOpened(!isReplyOpened) }} className="flex gap-2">
       <div className="flex gap-2 items-center mt-3 rounded justify-center w-[100px] hover:bg-[#303030] cursor-pointer">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
       </svg>
       <span><p  className="text-white text-sm">Reply</p></span>
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
  { isReplyOpened && 
  (
    <>
  <textarea required placeholder="Say something!" className="text-sm h-[120px] w-full bg-[#242424] hover:bg-[#202020] focus:bg-[#202020] border-transparent focus:border-transparent focus:ring-0 rounded text-white">
          </textarea>
          <div className="flex gap-8">
          <div onClick={ () => setIsReplyOpened(false) } className="h-[25px] w-[80px] border-[1px] border-orange-500 flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-red-600 to-red-700 hover:ring-0 hover:border-none">
            <p className="text-xs text-gray-200 font-semibold text-center">Cancel</p>
          </div>
          <div className="h-[25px] w-[80px] bg-gradient-to-r from-amber-700 to-red-500  flex items-center justify-center cursor-pointer hover:opacity-75">
            <p className="text-xs text-gray-200 font-semibold text-center">Submit</p>
          </div>
          </div>
          </>
  )
  }
      </>
  )
}





