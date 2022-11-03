import React from 'react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Topbar from '../components/Topbar'
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'

export default function ChangePassword() {


  const current_password = useRef();
  const newPassword = useRef();
  const navigate = useNavigate();


  const fetchData = async() => {
    const { data } = await axios.get("http://localhost:5000/api/profile/mydata");
    return data;
  }
  const updatePassword = async({old_password, new_password}) => {
    await axios.put("http://localhost:5000/api/user/update_password", {oldPassword: old_password, newPassword: new_password})
    navigate("/");
  }


  const { isLoading, isError, error, mutate} = useMutation("update_password", updatePassword)
  const { data, isError: isError_user_data } = useQuery("user-data", fetchData);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(current_password.current.value);
    const credentials = {
      current_password: current_password.current.value,
      new_password: newPassword.current.value,
    }
    mutate({old_password: credentials.current_password, new_password: credentials.new_password});
  }

  useEffect(() => {
      navigate("/login");
  }, [isError]) 
  

  return (
      <>
      <Topbar></Topbar>
      <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[4px] border-[#404040] mt-16 flex flex-col mb-24 shadow-sm"> 
         {isError && <h1 className="text-red-500 text-center font-semibold mt-3">{error.response.data.msg}</h1>}
       <div className="h-[70px] mb-6 ml-[20px] mt-4 mr-[20px]">
         <p className="text-white text-sm">Current password:</p>
         <input ref={current_password} className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="password" />
       </div>
       <div className="h-[70px] mb-6 ml-[20px]">
         <p className="text-white text-sm">New Password:</p>
         <input ref={newPassword} className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="password" />
       </div>
       <button type="submit" className="border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[2px] mb-6 mr-5 ml-5"href="#">Change Password</button>
       </div>
       </div>
       </form>

      <Footer></Footer>
      
      </>
  )
}





