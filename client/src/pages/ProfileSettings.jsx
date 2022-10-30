import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Topbar from '../components/Topbar'
import HeaderProfile from '../components/HeaderProfile'
import Men from '../assets/men.jpg'
import Footer from '../components/Footer'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'
axios.defaults.withCredentials = true;


export default function ProfileSettings() {

  const navigate = useNavigate();
  const username = useRef();
  const bio = useRef();
  
  const [file, setFile] = useState();

  const fetchUserData = async() => {
    const { data } = await axios.get("http://localhost:5000/api/user/me", { witCredentials: true })
    return data;
  }

  const updateUsername = async(username) => {
    const { data } = await axios.put("http://localhost:5000/api/user/update_username", {username: username}, { withCredentials: true })
    navigate("/");
  }

  const updateBio = async(bio) => {
    const { data } = await axios.put("http://localhost:5000/api/user/update_bio", {bio: bio}, { withCredentials: true})
    navigate("/");
  }

  const { data, isLoading } = useQuery("user_info", fetchUserData, {
    onError: () => {
      navigate("/login")
    }
  })

  const { isError, error, isLoading: loading_username_update, mutate: mutate_update_username} = useMutation("update_username", updateUsername)

  const { isLoading: loading_bio_update, mutate: mutate_update_bio } = useMutation("update_bio", updateBio)

 
  const deletePage = () => {
    navigate("/delete_account")
  }

  const handleUsernameUpdate = (e) => {
    e.preventDefault();
    mutate_update_username(username.current.value);
  }

  const handleBioUpdate = (e) => {
    e.preventDefault();
    mutate_update_bio(bio.current.value);
  }

  const handleProfilePic = async(e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image", file);
    await axios.post("http://localhost:5000/api/profile/upload", formData, { headers: {'Content-Type': 'multipart/form-data' }});
    navigate("/");
  }


  return (
    <>
      <Topbar></Topbar>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    <ToastContainer />
      <div className="w-full flex justify-center pl-12">
      <div className="w-auto h-auto bg-[#353535] border-[2px] border-[#404040] mt-8 flex flex-col mb-6 shadow-sm rounded"> 
      <form onSubmit={handleProfilePic}>
       <header className="h-[170px] w-full  flex justify-center items-center">
         <input onChange={e => setFile(e.target.files[0])} className="text-gray-300" type="file" accept="image/*" name="image"/>
         {isLoading ? 
         <div role="status">
         <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-orange-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
         <span class="sr-only">Loading...</span>
     </div>
          :
          <img src={data.profilePic} className="h-[120px] w-[120px] rounded-full border-[4px] border-[#404040]" alt=""></img>
          }
       </header>
       <div className="w-full flex justify-center mb-5">
       <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 w-[200px] rounded-sm text-white font-semibold">Save</button>
       </div>
       </form>
       <div className="h-[1px] w-full border-t-[2px] border-[#404040]"></div>
      
       <div className="h-[130px] mb-12 md:mb-6 ml-[20px] mt-6 mr-3">
         <form onSubmit={handleBioUpdate}>
         <p className="text-white text-sm">Bio:</p>
         <input className="h-[100px] w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="text" ref={bio} required/>
          <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">CHANGE</button>
          </form>
       </div>
       <div className="h-[1px] w-full border-t-[2px] border-[#404040] mb-6"></div>
       <a className="hover:bg-gradient-to-r from-amber-700 to-red-500 border border-amber-700 text-white font-bold py-[7px] px-3 rounded text-xs mt-[8px] ml-[18px] mr-[18px] mb-3 inline-flex pl-[150px] items-center"href="/change-password">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px] mr-3 mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
         <span>CHANGE PASSWORD</span></a>
      </div>
    </div>
    <Footer></Footer>
    

      </>
  ) 
  }