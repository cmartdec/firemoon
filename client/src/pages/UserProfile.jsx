import React from 'react'
import { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Men from '../assets/men.jpg'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function UserProfile() {
    const { username } = useParams();

    const [profile, setProfile] = useState();
    const [description, setDescription] = useState(false);

    const fetchData = async() => {
      const res = await axios.get(`http://localhost:5000/api/user/${username}`);
      if(res.data.desc == "") {
        setDescription(false)
      }else {
        setDescription(true);
      }
      return res.data.user;
    }

    const fetchPostsData = async() => {
      const res = await axios.get(`http://localhost:5000/api/post/getUserPosts/${username}`);
      return res.data
    }

    const { data } = useQuery("user-data", fetchData, {
      initialData: () => {
        return fetchData();
      }
    });

    const { data: data_posts, isLoading} = useQuery("posts-data", fetchPostsData, {
      initialData: () => {
        return fetchPostsData();
      }
    });
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
              @{data.username}
            </span>
          </h1>
          {
            description ? <p className="text-gray-400 mt-6">{data.desc}</p> : <p className="text-gray-400 mt-6">No description yet.</p> 
          }
        </div>
      </div>
    </div>
    </>
  )
}
