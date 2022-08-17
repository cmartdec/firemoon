import React from 'react'
import { useState } from 'react'
import Topbar from '../components/Topbar'
import Men from '../assets/men.jpg'
import ProfilePosts from '../components/ProfilePosts'
import Footer from '../components/Footer'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function Profile() {

  const [ noDescription, setNoDescription] = useState(false);

  const fetchUserPosts = async() => {
    const { data } = await axios.get("http://localhost:5000/api/post/getMyPosts", { withCredentials: true })
    return data;
  }

  const fetchUsername = async() => {
     const { data }= await axios.get("http://localhost:5000/api/user/me", { withCredentials: true})
     return data.username;
  }

  const fetchBio= async() => {
     const { data }= await axios.get("http://localhost:5000/api/user/me", { withCredentials: true})
     if (data.bio === "") {
       setNoDescription(true)
     }
     return data.bio;
  }

  const { data: data_username} = useQuery("get_username", fetchUsername);
  const { data: data_bio} = useQuery("get_bio", fetchBio);
  const { data: data_posts, isLoading} = useQuery("user-posts", fetchUserPosts);

  console.log(data_posts); 


  return (
    <>
    <Topbar></Topbar>
    <div className="w-full h-auto  lg:bg-[#353535] flex px-[50px] lg:px-[300px] py-[70px]">
      <div className="lg:flex flex flex-col pl-[150px]">
        <div>
          <img className="lg:absolute w-[150px] h-[150px] rounded-full object-cover border-[6px] border-[#404040] left-[250px] top-[100px]" src={Men} alt="logo" />
        </div>
        <div className="flex flex-col mr-3">
          <h1>
            <span className="text-white font-semibold text-2xl">
              @{data_username}
            </span>
          </h1>
          <p className="text-gray-400 mt-6">{noDescription ? <p>No description yet.</p> : data_bio}</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start py-7 gap-7 container mx-auto">
      <header className="w-full flex flex-col items-center gap-8"><p className="text-white font-bold text-xl">Posts</p>
       {
         isLoading ?
          <h1>Loading...</h1>
          :
          Object.keys(data_posts).map((index) => {
            return <ProfilePosts key={index} title={data_posts[index].title} data={data_posts[index].data} date={data_posts[index].createdAt}></ProfilePosts>
          })
       }
      </header>

    </div>
    <Footer></Footer>
    </>
  )
}










