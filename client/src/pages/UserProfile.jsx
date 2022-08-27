import React from 'react'
import { useState, useEffect } from 'react'
import Topbar from '../components/Topbar'
import Men from '../assets/men.jpg'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import ProfilePosts from '../components/ProfilePosts'
import Footer from '../components/Footer'
import Posts from '../components/UserProfilePosts'

export default function UserProfile() {
    const { username } = useParams();
    const [noDescription, setNoDescription] = useState(false);
    const [profileUsername, setProfileUsername] = useState();
    const [profileBio, setProfileBio] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchUserData = async() => {
      const { data } = await axios.get(`http://localhost:5000/api/user/${username}`);
      if(data.desc === "") {
       setNoDescription(true); 
      } else {
        setNoDescription(false);
      }
       
      return data;
    }

    const { data } = useQuery("user-data", fetchUserData, {
      onSuccess: (data) => {
        setProfileUsername(data.username)
        setProfileBio(data.desc)
      }
    });

    console.log(profileUsername);
    console.log(profileBio);


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
              @{profileUsername}
            </span>
          </h1>
          <div className="mt-3">
          {noDescription ? <p className="text-gray-300">No description yet.</p> : <p className="text-gray-400">{profileBio}</p>}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start py-7 gap-7 container mx-auto">
      <header className="w-full flex flex-col items-center gap-8"><p className="text-white font-bold text-xl">Posts</p>
       {
         isLoading ?
          <h1 className="text-white text-xl">Loading...</h1>
          :
          <Posts></Posts>
       }
      </header>

    </div>
    <Footer></Footer>
    </>
  )
}
