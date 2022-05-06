import React from 'react'
import Men from '../assets/men2.jpg'
import Bank from '../assets/bank.jpg'


export default function InterviewPosts() {
  return (
      <>
      <a href="/interview-post">
            <div className="rounded cursor-pointer h-[250px] w-[250px] lg:w-[250px] bg-[#404040] flex flex-col">
                <div className="w-full flex justify-center mt-3 mb-4">
                    <img className="h-[70px] w-[70px] rounded-full object-cover border-[4px] border-[#505050]" src={Bank} alt="" />
                </div>
                    <p className="text-white font-bold text-xl text-center px-4">Best brokerages to invest</p>
                    <div className="
                     bg-[#272727] h-full mt-3"><p className="text-[#B7B7B7] text-sm text-center px-4 py-3">If you are dedicated to invest in your fire journey, you have to read about this famous brokerage</p></div>
            </div>
            </a>



      </>
  )
}




