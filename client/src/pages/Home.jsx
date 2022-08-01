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

  const { data, isLoading, isError, error } = useQuery("posts", fetchAllPosts, {initialData: () => {
    return fetchAllPosts();
   }});

   console.log(data);
   
   // https://codesandbox.io/s/funny-solomon-secnh0?file=/src/index.js
   
  return (
    <>
    <Topbar></Topbar>
    <div className="h-auto w-full bg-[#303030] flex gap-6">
      <div className="hidden w-[400px] h-[200px] mt-[73px] ml-16 xl:flex flex-col px-3 py-3 border-[2px] border-[#404040] rounded overflow-y-auto">
        <header className="mb-2 text-white font-bold">Podcasts:</header>
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
      <div className="border-[2px] border-[#404040] w-full h-auto mt-12 rounded ml-3 xl:ml-0">
          <div className="h-auto w-full py-[9px] pl-[35px] border-b-[2px] border-[#404040] flex items-center">
            <a href="/self-profile">
            <img src={Men2} className="h-[35px] w-[35px] rounded-full border-[2px] border-[#404040]" alt="" /></a>
            <a className="ml-4 rounded bg-[#212121] h-[30px] w-full border-none mr-3 flex items-center pl-3 cursor-text" href="/new-post"><p className="text-gray-600 text-sm">New Post</p></a>
          </div>
          <div className="h-auto w-full py-[9px] pl-[35px] border-b-[2px] border-[#404040] flex md:flex-row flex-col items-start md:items-center gap-[15px]">
            <button className="bg-[#333232] hover:bg-[#404040] rounded py-[5px] px-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white mr-[4px]" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
              <p className="text-white font-semibold text-xs">POPULAR</p>
            </button>
            <button className="bg-[#333232] hover:bg-[#404040] rounded py-[5px] px-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white mr-[4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
               <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <p className="text-white font-semibold text-xs">NEW</p>
            </button>
            <button className="bg-[#333232] hover:bg-[#404040] rounded py-[5px] px-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white mr-[4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
 .           <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
              <p className="text-white font-semibold text-xs">TOP</p>
            </button>
            </div>
            <div className="container w-full h-auto flex flex-col px-8 py-8 gap-8">
              {
                 Object.keys(data).map((index) => {
                 return  <Posts key={index} title={data[index].title}></Posts>
                })
              }
            </div>
    </div>
      </div>
      <div className="h-auto flex flex-col justify-end items-center mr-3">
      <div className="h-[300px] w-[200px] border-[2px] border-[#404040] ml-8 sticky bottom-0 rounded">
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

    </>


  );
}

export default Home;