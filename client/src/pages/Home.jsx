import { useState, useEffect } from 'react'
import Logo4 from '../assets/hahaha.svg'
import Topbar from '../components/Topbar'
import Feed from '../components/Feed'
import Logo from '../assets/hahaha.svg'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import Men2 from '../assets/men2.jpg'
import Posts from '../components/Posts'
import Titlebar from '../components/Titlebar'
import { useQuery } from 'react-query'
import * as api from '../utils/usersApi'
import axios from 'axios'


/*
             <input className="ml-4 rounded bg-[#212121] border-none h-[30px] mr-3 text-white placeholder:text-sm w-full" type="text" placeholder="New Post" />

*/

function Home() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const fetchAllPosts = async() => {
    const { data } = await axios.get("http://localhost:5000/api/post/getAllPosts")
    return data;
  }

  const { data, isLoading, isError, error } = useQuery("posts", fetchAllPosts);

   if(isError) {
     console.log(error);
   }
   console.log(data);

   // https://codesandbox.io/s/funny-solomon-secnh0?file=/src/index.js




  return (
    <>
    <Topbar></Topbar>
    {isError &&
    <p className="text-center mt-2 text-red-600 text-xl">Something went wrong.</p>
     }
     <div className="h-full w-full flex justify-center">
    <div className="h-full w-[1380px] bg-[#303030] flex gap-6">
      <div className="hidden w-[400px] h-[260px] mt-[73px] ml-16 xl:flex flex-col px-3 py-3 border-[2px] border-[#404040] rounded-xl overflow-y-auto">
        <header className="mb-2 text-white font-bold text-center">
          <h1 className="text-white">Podcasts:</h1>
        </header>
        <div className="flex flex-col gap-2">
          <a className="flex flex-col hover:bg-[#505050]" href="https://open.spotify.com/episode/1uFk7jzxb4vCsnjVXZm4v6">
           <div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
            </svg><p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-500 font-semibold text-sm">Listen to podcast:</p></div><span><p className="text-white text-sm">From Bankruptcy fo FI in 8 years...</p></span></a>
          <a className="flex flex-col hover:bg-[#505050]" href="https://open.spotify.com/episode/1uFk7jzxb4vCsnjVXZm4v6">
           <div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
            </svg><p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-500 font-semibold text-sm">Listen to podcast:</p></div><span><p className="text-white text-sm">From Bankruptcy fo FI in 8 years...</p></span></a>
          <a className="flex flex-col hover:bg-[#505050]" href="https://open.spotify.com/episode/1uFk7jzxb4vCsnjVXZm4v6">
           <div className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd" />
            </svg><p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-500 font-semibold text-sm">Listen to podcast:</p></div><span><p className="text-white text-sm">From Bankruptcy fo FI in 8 years...</p></span></a>
        </div>
      </div>
      <div className="h-screen w-full max-w-[1024px] mt-6">
      <div className="border-[2px] border-[#404040] w-full h-auto mt-12 rounded-md ml-3 xl:ml-0">
          <div className="h-auto w-full py-[9px] pl-[35px] border-b-[2px] border-[#404040] flex items-center">
            <a className="rounded-full text-gray-300 px-2 py-2 bg-[#454545] text-sm font-semibold" href="/profile">
              Me
            </a>
            <a className="ml-4 rounded bg-[#212121] h-[30px] w-full border-none mr-3 flex items-center pl-3 cursor-text" href="/new-post"><p className="text-gray-600 text-sm">New Post</p></a>
          </div>
            <div className="container w-full h-auto flex flex-col px-8 py-8 gap-8">
              {
                isLoading ? 
                <div className="flex justify-center" role="status">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
    </div>
                :
                 Object.keys(data).map((index) => {
                 return  <Posts key={index} title={data[index].title} data={data[index].data} id={data[index]._id} date={data[index].createdAt} author={data[index].author} likeCount={data[index].likeCount} comments={data[index].comments}></Posts>
                })
              }
            </div>
    </div>
      </div>
      <div className="h-auto flex flex-col justify-end items-center mr-3">
      <div className="h-[300px] w-[200px] border-[2px] border-[#404040] ml-8 sticky bottom-0 rounded-xl">
        <div className="flex px-2 pt-8">
          <div className="h-auto w-[50%] flex flex-col items-center gap-8">
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/interviews">Interviews</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/contribute">Contribute</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="#">Twitter</a>
            <div className="flex flex-col gap-1 items-center group ">
            <a className="text-[#9C9C9C] text-xs group-hover:text-orange-500" href="https://twitter.com/cmartdec">Founder's</a>
            <a className="text-[#9C9C9C] text-xs group-hover:text-orange-500" href="https://twitter.com/cmartdec">Twitter</a>
            </div>
          </div>
          <div className="h-auto w-[50%] flex flex-col items-center gap-8">
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/about">About</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/help">Help</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/interviews">Privacy Policy</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/interviews">Terms</a>
            <a className="text-[#9C9C9C] hover:text-orange-500 text-xs" href="/faq">FAQ</a>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>

    </>


  );
}

export default Home;