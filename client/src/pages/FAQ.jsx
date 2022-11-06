import React from 'react'
import Topbar from '../components/Topbar'
import Question from '../components/Question'
import Footer from '../components/Footer'

export default function FAQ() {

 //https://www.section.io/engineering-education/building-faq-page-using-react-styled-components-and-react/

  return (
      <>
       <Topbar></Topbar>
       <div className="h-screen w-auto flex justify-center mb-12">
        <div className="flex flex-col gap-6 h-screen w-[900px] pt-20 mb-12">
         <Question title={"What is Firemoon?"} text={"Firemoon is a platform for people who want to get Financial Independence and Early Retirement. Feel free to create an account and start your FIRE journey with us"}></Question>
         <Question title={"What are these interviews?"} text={"Interviews is one of the most important section of Firemoon. In the interviews section, you can read news, real stories, tips and much more that will improve your FIRE journey"}></Question>
         <Question title={"What is Contribute?"} text={"If you have something to tell the community and want to be featured in Interview section this is the place. We want Firemoon to be maintained by the community. So tell us, what is your story or what do you thinking about"}></Question>
         <Question title={"I need help, How I contact with the Support Team?"} text={"If you are having problems, we’re so glad to be able to help you, so in order to get help, you can go https://firemoon.app/help"}></Question>
         <Question title={"What about the newsletter?"} text={"We recommend you to subscribe to the newsletter, so you will recieve news, and interesting stuff from the community without being spammed. We respect our community"}></Question>
         <Question title={"Is firemoon free?"} text={"Yes!. Firemoon is totally free. We’re aiming to build a big community without charging our users."}></Question>
        </div>
       </div>
      </>
  )
}



