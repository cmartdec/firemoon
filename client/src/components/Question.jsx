import React from 'react'
import { useState } from 'react'


export default function Question({title, text}) {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

  return (
      <>
        <div onClick={handleClick} className="h-auto py-6 w-full bg-[#252525] rounded-md hover:bg-[#212121] flex flex-col  items-center pl-6 hover:cursor-pointer mb-3">
          <p className="text-white font-bold text-xl">{title}</p>
          <div className='bg-[#404040] py-2 px-3 rounded-md mr-3 mt-3'>
          <p className='text-white'>
            {text}
          </p>
          </div>
         </div>
      </>
  )
}




