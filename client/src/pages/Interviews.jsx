import React from 'react'
import Topbar from '../components/Topbar'
import InterviewPosts from '../components/InterviewPosts';
import Broker from '../assets/broker.jpg'
import Recession from '../assets/recession.jpg'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function Interviews() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const fetchPostDiscussions = async() => {
    const { data } = await axios.get("http://localhost:5000/api/post/getAllPosts");
    return data;
  }

  const { data, isLoading, isError, error } = useQuery("posts-data", fetchPostDiscussions);
  
  if(isLoading) {
    console.log("loading..");
  }
  console.log(typeof(data));

  return (
    <>
    <Topbar></Topbar>
    <div className="h-[250px] w-full bg-[#232323] flex">
      <div className="h-full w-full py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-4xl">Interviews</h1>
          <p className="text-[#B7B7B7]">Learn from people who achieved Financial Independence and Retire Early</p>
          <p className="text-[#B7B7B7]">Here you can find new stories, news, new places, and much more!</p>
      </div>
      </div>
      <div className="h-full w-full lg:flex items-center hidden">
        <div className="h-[220px] w-[500px] bg-[#353535] rounded-2xl shadow-lg">
          <div className="h-[60px]"><p className="text-white font-medium text-2xl text-center mt-4">Stay informed with the latest</p>
          <p className="text-white font-medium text-2xl text-center">Interviews</p>
          </div>
          <div className="mt-8 flex justify-center px-4 gap-2">
            <input className="h-[40px] rounded bg-[#262626] border-none w-full text-white border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="text" placeholder="Enter email address" />
            <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[10px] px-3 rounded text-xs"href="#">SUBMIT</button>
          </div>
          <div className="mt-2">
        <p className="text-center text-[#B7B7B7] text-sm">Subscribe to our newsletter to recieve</p>
          <p className="text-center text-[#B7B7B7] text-sm">last interviews, news, etc...</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col container mx-auto">
    <div className="flex flex-wrap justify-center gap-[150px] w-full mt-12">
      <InterviewPosts img={Broker} title={"Best brokerages to invest with"} text={"If you have decided that it's time to invest, take a look at these brokerages"} href={"https://www.mybanktracker.com/blog/investing/best-brokerages-295729"}></InterviewPosts>
      <InterviewPosts img={Recession} title={"How to prepare for a recession"} text={"Some tips to prepare for a possible recession"} href={"https://www.washingtonpost.com/business/2022/06/15/7-tips-on-how-to-survive-a-recession/"}></InterviewPosts>
      <div className="lg:block hidden h-auto w-[250px]">
        <div className="bg-gradient-to-r from-amber-700 to-red-500 py-[3px] px-[3px] rounded"><p className="text-white font-semibold text-sm text-center">Latest discussions</p></div>
        <div className="h-full w-full flex flex-col mt-4 px-3">
          {
            isLoading ? 
            <h1>Loading...</h1>
            :
            Object.keys(data).slice(0,5).map((index) => {
              return <a key={index} href={`/post/${data[index]._id}`} className="text-white text-xs font-semibold mb-3">{data[index].title}</a>
            })
          }
        <div className="flex">
        <a href="/" className="text-white text-xs font-semibold mb-3 underline">Go to all discussions</a>
        <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white ml-2" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
</a>
        </div>
        </div>

      </div>
    </div>

    <div className="flex flex-wrap gap-[150px] w-full mt-24 mb-16 justify-center">
      <InterviewPosts></InterviewPosts>
      <InterviewPosts></InterviewPosts>
      <InterviewPosts></InterviewPosts>
    </div>

    <div className="flex flex-wrap gap-[150px] w-full mt-24 justify-center mb-3">
      <InterviewPosts></InterviewPosts>
      <InterviewPosts></InterviewPosts>
      <InterviewPosts></InterviewPosts>
    </div>
    </div>
    </>

  )
}




