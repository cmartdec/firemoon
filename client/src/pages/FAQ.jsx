import React from 'react'
import Topbar from '../components/Topbar'
import Question from '../components/Question'

export default function FAQ() {

 //https://www.section.io/engineering-education/building-faq-page-using-react-styled-components-and-react/

  return (
      <>
       <Topbar></Topbar>
       <div className="h-screen w-screen flex justify-center">
        <div className="h-screen w-[900px] pt-32">
         <Question></Question>
         <Question></Question>
         <Question></Question>
         <Question></Question>
         <Question></Question>
        </div>
       </div>
      </>
  )
}


