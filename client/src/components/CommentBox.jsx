import React from 'react'
import { useRef } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'

export default function CommentBox({ postId }) {

  const data = useRef();

  const createCommentRequest = async({ data }) => {
    const res = await axios.post(`http://localhost:5000/api/post/createComment/${postId}`, { content: data })
    return res;
  }

  const { data: data_comment, isLoading, mutate } = useMutation("createComment", createCommentRequest, {
    onSuccess: () => {
      window.location.reload(true);
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.current.value);
    mutate({
      data: data.current.value,
    })
    data.current.value = "";
  }

  return (
      <>
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <textarea required ref={data} placeholder="Comment the post!" className="text-sm h-[150px] w-full bg-[#242424] focus:bg-[#202020] border-transparent focus:border-transparent focus:ring-0 rounded text-white">
          </textarea>
         <div className="h-[40px] w-full mt-3">
          <button type="submit" className="bg-gradient-to-r from-amber-700 to-red-500 rounded px-2 py-[3px] w-[25%] text-xs font-bold text-white text-center">Comment</button>
         </div>
        </form>
      </div>
      </>
  )
}




