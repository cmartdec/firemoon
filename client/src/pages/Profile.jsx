import React from 'react'
import Titlebar from '../components/Titlebar'
import Men from '../assets/men.jpg'
import ProfilePosts from '../components/ProfilePosts'
import Footer from '../components/Footer'

export default function Profile() {
  return (
    <>
    <Titlebar></Titlebar>
    <div className="w-full h-auto  lg:bg-[#353535] flex px-[50px] lg:px-[300px] py-[70px]">
      <div className="lg:flex flex flex-col pl-[150px]">
        <div>
          <img className="lg:absolute w-[150px] h-[150px] rounded-full object-cover border-[6px] border-[#404040] left-[250px] top-[100px]" src={Men} alt="logo" />
        </div>
        <div className="flex flex-col mr-3">
          <h1>
            <span className="text-white font-semibold text-2xl">@chris</span>
          </h1>
          <p className="text-gray-400">description afisdbfisdfbsdif sdiufh aiosdfhsudfhaos idfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguh</p>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start py-7 gap-7 container mx-auto">
      <header className="w-full flex flex-col items-center gap-8"><p className="text-white font-bold text-xl">Posts</p>
      <ProfilePosts></ProfilePosts>
      <ProfilePosts></ProfilePosts>
      <ProfilePosts></ProfilePosts>
      <ProfilePosts></ProfilePosts>
      </header>

    </div>
    <Footer></Footer>
    </>
  )
}










