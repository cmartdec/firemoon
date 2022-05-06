import React from 'react'

export default function CommentBoxDisallowed() {
  return (
      <>
       <div className="w-full h-auto border-[2px] border-[#404040] mb-8 py-6 rounded pl-6 flex items-center pr-6">
          <h3 className="text-[#9C9C9C] text-sm font-semibold w-full"><a className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-500 text-sm font-semibold" href="/login">Login</a> or <span><a className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-red-500 text-sm font-semibold" href="/signup">Register</a></span> to leave a comment</h3>
          <div class="flex items-center gap-4">
            <a className="rounded bg-gradient-to-r from-amber-700 to-red-500  px-3 py-[5px] text-white text-xs font-semibold" href="">SIGNUP</a>
            <a className="rounded border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-500  px-3 py-[5px] text-white text-xs font-semibold" href="">LOGIN</a>
          </div>
        </div>
      </>
  )
}







