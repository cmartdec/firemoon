import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import moment from 'moment'
import parse from 'html-react-parser'
axios.defaults.withCredentials = true;



export default function SavedPosts({ title, data, author, id, date ,comments }) {

  const [isOpened, setIsOpened] = useState();
  const navigate = useNavigate();

  const date_created = moment.utc(date).local().startOf('seconds').fromNow()
  const body_data = data.slice(0,400);



  const handleClick = () => {
    setIsOpened(true);
  }


  console.log(date)
  const deletePostRequest = async() => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/post/deleteSavedPost/${id}`)
      setIsOpened(false);
      navigate("/");
      console.log("post deleted");
    } catch(error) {
      console.log(error);
    }
  }

  return (
      <>
      { isOpened &&
      (
        <div id="popup-modal" tabindex="-1" class="backdrop-blur-sm overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <div class="relative bg-[#212121] rounded-lg shadow dark:bg-gray-700">
              <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                  <span class="sr-only">Close modal</span>
              </button>
              <div class="p-6 text-center">
                  <svg aria-hidden="true" class="mx-auto mb-4 w-14 h-14 text-white dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 class="mb-5 text-lg font-normal text-white dark:text-gray-400">Are you sure you want to delete this post?</h3>
                  <button onClick={ deletePostRequest } data-modal-toggle="popup-modal" type="button" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Yes, I'm sure
                  </button>
                  <button onClick={()=> setIsOpened(false)} data-modal-toggle="popup-modal" type="button" class="text-white bg-[#404040] hover:bg-[#505050] focus:outline-none focus:ring-0 rounded-lg border border-[#404040] text-sm font-medium px-5 py-2.5 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">No, cancel</button>
              </div>
          </div>
      </div>
  </div>
      )}
      <div className="h-auto w-[800px] bg-[#404040] rounded-md flex cursor-pointer overflow-auto pl-3">
         <div className="w-full h-full flex flex-col mb-5 pl-3">
         <a href={`/post/${id}`}>
           <div className="flex gap-2 items-center"><p className="text-white text-xs mt-6">Posted by {author} {date_created}</p></div>
           <div className="py-2"><h3 className="text-white font-bold text-xl">{title}</h3></div>
           <div><p className="text-white text-sm mb-3">{parse(body_data)}...</p></div>
           </a>
           <div className="flex gap-1 items-center mt-[6px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
             <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg><p className="text-[#d4d4d4] font-semibold text-xs">{comments} Comments</p>
            <button onClick={handleClick} className="flex items-center gap-1 rounded border border-red-500 ml-5 px-1 text-gray-300 hover:text-white hover:bg-red-500 pr-5 py-[2px]">
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




