import React from 'react'
import { useRef } from 'react'
import Logo from '../assets/hahaha.svg'
import TwitterIcon from '@material-ui/icons/Twitter'
import Titlebar from '../components/Titlebar'
import FacebookIcon from '@material-ui/icons/Facebook'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


export default function ForgotPassword() {

  const email = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
    const res = await axios.post("http://localhost:5000/api/user/forgot", {email: email.current.value})
    console.log(email.current.value);
    toast.success('Email sent, please check your inbox and follow the instructions.', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: false,
      });
    }catch(error) {
      const res_error = error.response.data.msg;
      console.log(error.response.data.msg);
      toast.error(`${res_error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: false,
        });
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
      
      <div className="w-[100vw] flex justify-center">
      <div className="w-auto h-auto bg-[#353535] border-[2px] border-[#404040] mt-24 flex flex-col mb-[200px] shadow-sm rounded"> 
      <form className="flex flex-col" onSubmit={handleSubmit}>
       <div className="h-[70px] ml-[20px] mb-2 mt-6 mr-[20px]">
         <p className="text-white text-sm text-center mb-3">Enter the email address you signed up with.</p>
         <input required type="email" ref={email} className="appearance-none w-[370px] rounded bg-[#252525] border-none text-white text-sm focus:outline-none focus:shadow-outline ring-0 border-transparent focus:border-transparent focus:ring-0 focus:bg-[#212121]" placeholder="example@example.com"/>
       </div>
       <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[8px] px-3 rounded text-xs mb-6 mt-2 mr-5 ml-5"href="#">Submit</button>
       </form>
        
       </div>
       </div>

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



