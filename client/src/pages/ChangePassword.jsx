import React from 'react'
import { useRef } from 'react'
import Titlebar from '../components/Titlebar'
import Men from '../assets/men.jpg'
import Logo from '../assets/hahaha.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/authSlice'
import { useNavigate } from 'react-router'

export default function ChangePassword() {

  const current_password = useRef();
  const new_password = useRef();
  
  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.put("http://localhost:5000/api/user/update_password", {oldPassword: current_password.current.value, newPassword: new_password.current.value}, {withCredentials: true})
      dispatch(logOut());
      toast.success('Password updated!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }catch(error) {
      console.log(error);
    }

  }
  return (
      <>
      <Titlebar></Titlebar>
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
      <form onSubmit={handleSubmit}>
      <div className="w-full flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[4px] border-[#404040] mt-16 flex flex-col mb-24 shadow-sm"> 
       <div className="h-[70px] mb-6 ml-[20px] mt-6 mr-[20px]">
         <p className="text-white text-sm">Current password:</p>
         <input ref={current_password} className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="password" />
       </div>
       <div className="h-[70px] mb-6 ml-[20px]">
         <p className="text-white text-sm">New Password:</p>
         <input ref={new_password} className="w-[370px] rounded bg-[#262626] border-none text-white text-sm border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" type="password" />
       </div>
       <button type="submit" className="border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mt-[2px] mb-6 mr-5 ml-5"href="#">Change Password</button>
       </div>
       </div>
       </form>

       <footer className="bg-[#303030] border-t-4 border-[#353535] h-[350px] w-full flex flex-col items-center">
      <div className="h-[110px] w-[700px] bg-[#303030] mt-[30px]">
        <p className="text-white font-bold text-2xl text-center">Keep in touch with the community</p>
        <p className="text-[#AEAEAE] text-center text-sm font-bold ">Recieve last updates and discussions that help you in your Fire journey</p>
        <div className="flex justify-center">
         <input type="text" className="appearance-none border rounded w-[500px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#202020] border-[#404040] mt-3" placeholder="Email address"/>
         <span>
          <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[10px] px-3 rounded text-xs mt-[13px] ml-[8px]"href="#">SUBMIT</button>
         </span>
        </div>
      </div>
      <div className="h-[200px] w-[600px] bg-[#303030] py-3">
      <a className="flex justify-center">
        <img src={Logo} alt="logo4" width="100" />
        <span className="mt-[4px] ml-[3px] text-sm text-white">by</span>
        <a className="text-white font-bold bg-blue-500  rounded text-xs ml-[12px] mt-[6px]" href="https://twitter.com/cmartdec">
          @cmartdec
        </a>
        </a>
        <div className="flex justify-center">
        <div className="w-[300px]">
          <p className="text-[#AEAEAE] text-sm text-center mt-2">Connect with the Firemoon community. Learn from others, achieve Financial Independence and Retire Early</p>
        </div>
        </div>
        <div className="flex justify-center w-full bg-[#303030] mt-3  gap-3">
          <div><TwitterIcon color="action"></TwitterIcon></div>
          <div><FacebookIcon color="action"></FacebookIcon></div>
        </div>
      </div>
    </footer>
      </>
  )
}





