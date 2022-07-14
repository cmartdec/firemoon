import React from 'react'
import Topbar from '../components/Topbar'
import ProfilePosts from '../components/ProfilePosts'
import HeaderProfile from '../components/HeaderProfile'
import Footer from '../components/Footer'

export default function SelfProfile() {


  return (
    <>
    <Topbar></Topbar>
    <HeaderProfile></HeaderProfile>
    <div className="flex flex-col items-start py-7 gap-7">
      <header className="w-full flex flex-col items-center gap-8"><p className="text-white font-bold text-xl">Posts</p>
      <ProfilePosts></ProfilePosts>
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










