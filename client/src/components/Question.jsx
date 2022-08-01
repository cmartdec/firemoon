import React from 'react'
import { useState } from 'react'


export default function Question({text}) {

    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    }

  return (
      <>
        <div onClick={handleClick} className="h-[70px] w-full bg-[#252525] rounded-md hover:bg-[#212121] flex items-center pl-6 hover:cursor-pointer mb-3">
          <p className="text-white font-bold text-xl">{text}</p>
         </div>
         {isOpened &&  <div className="bg-[#404040] h-auto pb-6 w-full rounded-md px-6 py-3 mb-6">
          <p className="text-gray-200 text-lg">Firemoon is a platform for people whose aim is achieving Financial Independence and Early Retirement. Feel free to create an account and start your Fire journey with us</p>
         </div>}
      </>
  )
}




