import React from 'react'
import { useEffect } from 'react'
import Topbar from '../components/Topbar'
import Men from '../assets/men.jpg'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function UserProfile() {
    const { username } = useParams();

    const fetchUserData = async() => {
        const { data } = await axios.get(`http://localhost:5000/api/user/${username}`)
        return data;
    }

    const { data, isLoading, isError, error } = useQuery("user-data", fetchUserData, {
        initialData: () => {
            return fetchUserData();
        }
    });

    if(isError) {
        console.log(error.response.data.msg);
    }
    console.log(data);

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
          { isError && <div class="bg-red-600 rounded-lg py-5 px-6 mb-4 text-base text-white w-[300px]" role="alert">
              {error.response.data.msg}
           </div>}
            <span className="text-white font-semibold text-2xl">
                {data.username}
            </span>
          </h1>
          <p className="text-gray-400 mt-6">{data.desc}</p>
        </div>
      </div>
    </div>
    </>
  )
}
