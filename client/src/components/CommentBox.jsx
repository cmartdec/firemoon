import React from 'react'

export default function CommentBox() {
  return (
      <>
      <textarea placeholder="Comment the post!" className="text-sm h-[150px] w-full bg-[#242424] focus:bg-[#202020] border-transparent focus:border-transparent focus:ring-0 rounded text-white">
        </textarea>
        <div className="h-[40px] w-full mt-3">
          <button className="bg-gradient-to-r from-amber-700 to-red-500 rounded px-2 py-[3px] w-[25%] text-xs font-bold text-white text-center">Comment</button>
        </div>
      </>
  )
}




