import React from 'react'
import { useState } from 'react'

export default function Testing() {


  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  }


  return (
     <>

    <div className="flex flex-col w-full h-[100vh] gap-2 justify-center items-center">
      <p className={state ? "text-red-500 mt-3" : "text-green-500"}>whatever</p>
      <button className="bg-blue-500" onClick={handleClick}>press</button>
    </div>

    </>

  )
}







