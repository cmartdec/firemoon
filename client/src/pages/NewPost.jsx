import React from 'react'
import Topbar from '../components/Topbar'
import Icon from '../assets/icon2.png'
import Logo from '../assets/hahaha.svg'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import TextEditor from '../components/TextEditor'

export default function NewPost() {

   


    const color = "#303030"
    document.body.style.backgroundColor = color;
    /*
         <input type="text" className="appearance-none border rounded w-[500px] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#202020] border-[#404040] mt-3" placeholder="Email address"/>
     */

 

  return (
    <>
    <Topbar></Topbar>
    <div className="container mx-auto h-auto w-full bg-[#303030] flex flex-col pl-20">
        <div className="container mx-auto h-auto w-[900px] bg-[#404040] mt-12 flex flex-col items-center shadow-xl rounded-md mb-24">
            <div className="w-full h-[60px] flex justify-center pt-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-[7px] mt-[4px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
                <p className="text-white font-bold text-2xl">New Post</p></div>
            <div className="h-[50px] w-[600px] bg-[#383838] mt-8">
            <textarea  type="text" className="form-control block appearance-none border rounded w-full h-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#202020] border-[#404040] focus:border-[#404040] focus:ring-[#404040]" placeholder="Title"/>
            </div>
            <div className="container mx-auto h-auto w-[640px] bg-[#404040] mt-8 border-[1px] border-[#808080] px-3 pt-6">
              
              <TextEditor></TextEditor>
            </div>
            <div className="h-[50px] w-[650px] mt-6 flex items-center flex-row-reverse gap-3 mb-6">
             <button className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs mr-3"href="/signup">NEW POST</button>
             <a className="ml-[10px] text-white font-bold py-[8px] px-3 rounded text-xs border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-800" href="/login">SAVE DRAFT</a>
            </div>
        </div>
      </div>

    <footer className="bg-[#303030] border-t-4 border-[#353535] h-[350px] w-full flex flex-col items-center">
      <div className="h-[110px] w-[700px] bg-[#303030] mt-[30px]">
        <p className="text-white font-bold text-2xl text-center">Keep in touch with the community</p>
        <p className="text-[#AEAEAE] text-center text-sm font-bold ">Recieve last updates and discussions that help you in your Fire journey</p>
        <div className="flex justify-center">
         <input type="text" className="border rounded w-[500px] py-2 px-3 text-white focus:outline-none focus:shadow-outline bg-[#202020] border-[#404040] mt-3 align-text-top" placeholder="Email address"/>
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




