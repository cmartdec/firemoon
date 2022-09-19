import React from 'react'
import { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Comment from '../components/Comment'
import CommentBoxDisallowed from '../components/CommentBoxDisallowed'
import CommentBox from '../components/CommentBox'
import { useParams } from 'react-router'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { format } from 'date-fns'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;


export default function Post(props) {

// MODELING TO COMMENTS
// https://www.mongodb.com/community/forums/t/what-is-the-best-schema-for-a-blog-post-for-storing-the-blog-content-like-share-and-comment/131915/2

  const color = "#303030"
  document.body.style.backgroundColor = color;


  const [likeCounter, setLikeCounter] = useState();
  const [commentCounter, setCommentCounter] = useState();
  const [isLogged, setIsLogged] = useState(true);
  const logged_in = localStorage.getItem('logged_in');

  useEffect(() => {
    if(logged_in) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [logged_in])

  const { id } = useParams();

  const fetchPostData = async() => {
    const { data } = await axios.get(`http://localhost:5000/api/post/${id}`);
    return data;
  }

  const fetchCommentsData = async() => {
    const { data } = await axios.get(`http://localhost:5000/api/post/getPostComments/${id}`)
    return data;
  }
  

  const { data, isLoading } = useQuery("post_data", fetchPostData, {
    onSuccess: (data) => {
      setLikeCounter(data.likeCount);
      setCommentCounter(data.comments);
    }
  });

  const { data: dataComments, isLoading: isLoadingComments } = useQuery("comments_data", fetchCommentsData)


  if(isLoadingComments) {
    console.log("is loading...")
  } else {
    console.log(dataComments);
  }


  if(isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div role="status">
          <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
         <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

 const date_created = moment.utc(data.createdAt).local().startOf('seconds').fromNow()

 const handleLikeButton = async() => {
   try {
     const res = await axios.post(`http://localhost:5000/api/post/like/${id}`);
     setLikeCounter(likeCounter+1);
   }catch(error) {
     console.log(error);
   }
 }

 const handleUnlikeButton = async() => {
   try {
    const res = await axios.post(`http://localhost:5000/api/post/unlike/${id}`)
   }catch(error){
    console.log(error);
   }
 }

 const handleSaveButton = async() => {
   try {
     const res = await axios.post(`http://localhost:5000/api/post/savePost/${id}`, { withCredentials: true })
     toast.success("Post saved succesfully!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      pauseOnHover: false
    })
     console.log(res);
   }catch(error) {
    toast.warning("You already saved this post!", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      pauseOnHover: false
    })
      console.log(error);
   }
 }

 console.log(data);
  return (
    <>
    <Topbar></Topbar>
    <ToastContainer></ToastContainer>
    <div className="h-auto w-full flex justify-center">
      <div className="w-full max-w-[1024px] h-full flex flex-col items-center pt-12">
        <div className="h-auto w-full bg-[#404040] rounded mb-12 flex">
          <div className="h-full w-[60px] flex flex-col justify-start items-center pt-3">
          <button onClick={handleLikeButton}>
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
           </svg>
          </button>

         <h1 className="text-white font-bold">{likeCounter}</h1>

         <button onClick={handleUnlikeButton}>
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
         </svg>
         </button>
          </div>
           
          <div className="flex flex-col w-full">
          <p className="text-white text-xs mt-4 ml-3">Posted by @<a className="hover:underline" href={`/users/${data.author}`}>{data.author}</a> {date_created}</p>
          <h1 className="text-white font-bold text-2xl mt-1 ml-2">{data.title}</h1>
          <div className="flex flex-col ml-2">
            <p className="text-gray-300">
              {isLoading ? <h1>Loading...</h1> : data.data}
            </p>
          </div>
          <div className="container mx-auto flex gap-[2px]">
          <button className="m-2 mb-4 text-xs rounded-lg bg-[#303030] py-[4px] px-4 text-white mt-4">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[12px] w-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <p>{commentCounter} Comments</p>
              </div>
            </button>
            <button onClick={handleSaveButton} className="m-2 mb-4 text-xs rounded-lg bg-[#303030] py-[4px] px-4 text-white mt-4 hover:opacity-75">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[12px] w-[12px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
               <p>Save</p>
              </div>
            </button>
          </div>
         </div>
        </div>
        {isLogged ? <CommentBox postId={id}></CommentBox> : <CommentBoxDisallowed></CommentBoxDisallowed>}
        <div className="w-full flex flex-col gap-8 mb-24">
          { 
           isLoadingComments ? 
            <h1>Loading...</h1>
            :
            Object.keys(dataComments).reverse().map((index) => {
              return <Comment key={index} content={dataComments[index].content} commenter={dataComments[index].commenter.username} date={dataComments[index].createdAt}></Comment>
            })
          }
        </div>
      </div>
    </div>
     
    </>

  )
}


/*
            Object.keys(dataComments).map((index) => {
              return <Comment key={index} content={dataComments[index].content}></Comment>
            })

*/





