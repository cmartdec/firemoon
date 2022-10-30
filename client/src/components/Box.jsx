import React from 'react'

export default function Box({ text, href }) {
  return (
      <>
         <a href={href} className="h-[250px] w-[300px] rounded-md bg-[#454545] text-white font-bold text-3xl flex justify-center items-center cursor-pointer hover:bg-[#404040] shadow-xl">{text}</a>
      </>
  )
}



