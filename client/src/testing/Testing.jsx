import React from 'react'
import { useState } from 'react'
import Men from '../assets/men.jpg'

const Posts = () => {

    const [likeCount, setLikeCount] = useState(0);



    function handleClick () {
      console.log("hello")
    }





    return (
        <>
          <div>hola</div>
          <h1 onClick={handleClick} className="text-red-500 hover:cursor-pointer bg-blue-500 rounded-xl pl-3">Hola daniel</h1>
        </>
    )
}



export default function Testing() {
  return (
      <>
      <div className="mt-12 px-12">
      <Posts></Posts>
      </div>
      </>
  )
}




