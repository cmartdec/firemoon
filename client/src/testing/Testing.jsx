import React from 'react'
import Titlebar from '../components/Titlebar'
import Men2 from '../assets/men2.jpg'
import Posts from '../components/Posts'
import Logo from '../assets/logo.svg'
import Topbar_dpl from '../components/Topbar_dpl'
import { useSelector } from 'react-redux'

export default function Testing() {
  const color = "#303030"
  document.body.style.backgroundColor = color;

  const user = useSelector((state) => state.currentUser)



  return (
     <>
      <div>{user.username}</div>
      <div>{user.desc}</div>
      
   

    </>

  )
}







