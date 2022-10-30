import React from 'react'
import Topbar from '../components/Topbar'
import Box from '../components/Box'

export default function Stack() {


  return (
      <>
      <Topbar></Topbar>
       <div className="h-screen w-auto flex justify-center">
         <div className="h-screen w-[1400px]">
           <div className="h-[300px] flex items-center justify-center">
             <div className="flex flex-col gap-2 text-center">
             <h1 className="text-white text-6xl font-bold">The Firemoon Stack</h1>
             <h3 className="text-gray-300 text-xl font-semibold">Look at what technologies I used to build Firemoon</h3>
             </div>
           </div>
           <div className="h-full w-auto px-[150px] flex flex-col items-center gap-20">
           <div className="flex gap-12">
             <Box href={"https://nodejs.org"} text={"Node.js"}></Box>
             <Box href={"https://reactjs.org"} text={"React"}></Box>
             <Box href={"https://mongodb.com"} text={"MongoDB"}></Box>
             </div>
           <div className="flex gap-12">
             <Box href={"https://tailwindcss.com"} text={"TailwindCSS"}></Box>
             <Box href={"https://postmarkapp.com"} text={"Postmark"}></Box>
             <Box href={"https://postman.com"} text={"Postman"}></Box>
             </div>
           <div className="flex gap-12">
             <Box href={"https://namecheap.com"} text={"Namecheap"}></Box>
             <Box href={"https://code.visualstudio.com"} text={"VS Code"}></Box>
             <Box href={"https://github.com"} text={"Github"}></Box>
             </div>
           <div className="flex gap-12">
             <Box href={"https://aws.amazon.com/"} text={"AWS"}></Box>
             <Box href={"https://railway.app/"} text={"Railway"}></Box>
             <Box href={"https://www.docker.com/"} text={"Docker"}></Box>
             </div>
           <div className="flex gap-12">
             <Box href={"https://www.notion.so/"} text={"Notion"}></Box>
             <Box href={"https://colorslurp.com/"} text={"ColorSlurp"}></Box>
             <Box href={"https://slack.com/"} text={"Slack"}></Box>
             </div>
             </div>
           </div>
         </div>
      </>
  )
}



