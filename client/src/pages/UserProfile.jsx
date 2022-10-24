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
    const [posts, setPosts] = useState([]);
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

    const fetchUserPosts = async() => {
      const { data } = await axios.get(`http://localhost:5000/api/post/getUserPosts/${username}`)
      return data;
    }

    const { data } = useQuery("user-data", fetchUserData, {
      onSuccess: (data) => {
        setProfileUsername(data.username)
        setProfileBio(data.desc)
      }
    });

    const { data: data_posts, isLoading: isLoadingPosts } = useQuery("posts-data", fetchUserPosts, {
      onSuccess: (data_posts) => {
        setPosts(data_posts);
      }
    });
    if(isLoadingPosts) {
      console.log("Loading...")
    } else {
      console.log(posts);
    }

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
         isLoadingPosts ?

<div role="status">
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

          :
          Object.keys(data_posts).map((index) => {
            return <Posts key={index} title={data_posts[index].title} data={data_posts[index].data} author={data_posts[index].author} date={data_posts[index].createdAt} likeCount={data_posts[index].likeCount} id={data_posts[index]._id} comments={data_posts[index].comments}></Posts>
          })
       }
      </header>

    </div>
    <Footer></Footer>
    </>
  )
}
