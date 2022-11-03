import React from 'react'


export default function InterviewPosts({title, text, href, img }) {
  return (
      <>
      <a href={href}>
            <div className="shadow-lg rounded cursor-pointer h-[250px] w-[250px] lg:w-[250px] bg-[#404040] flex flex-col">
                <div className="w-full flex justify-center mt-3 mb-4">
                    <img className="h-[70px] w-[70px] rounded-full object-cover border-[4px] border-[#505050]" src={img} alt="" />
                </div>
                    <p className="text-white font-bold text-xl text-center px-4">{title}</p>
                    <div className="
                     bg-[#272727] h-full mt-3"><p className="text-[#B7B7B7] text-sm text-center px-4 py-3">{text}</p></div>
            </div>
            </a>
      </>
  )
}




