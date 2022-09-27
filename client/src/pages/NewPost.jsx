import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import TextareaAutosize from 'react-textarea-autosize'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios';
import parse from 'html-react-parser'
import { Editor } from '@tinymce/tinymce-react';
axios.defaults.withCredentials = true;


export default function NewPost() {

  const title = useRef();
  const body = useRef();

  const navigate = useNavigate();


  const postData = async({title, data, author}) => {
    await axios.post("http://localhost:5000/api/post", {title: title, data: data, author: author}, {withCredentials: true})
    navigate("/");
  }

  const getUserData = async() => {
    const res = await axios.get("http://localhost:5000/api/user/me", {withCredentials: true})
    return res.data.username;
  }

  const { isLoading, isError, error, mutate } = useMutation("new-post", postData)

  const { data } = useQuery("user_data", getUserData, {
    onError: () => {
      navigate("/login")
    }
  });

  const editorRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editorRef.current){
      mutate({ title: title.current.value, data: editorRef.current.getContent(), author: data })
      console.log(editorRef.current.getContent());
    }
    /*
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    */
  };


  return (
    <>
     <Topbar></Topbar>
     <div className="flex justify-center">
       <form onSubmit={handleSubmit}>
       <div className="w-[550px] md:w-[800px] h-auto flex flex-col items-center pt-24 gap-12 mb-40">
         <input required ref={title} className="w-full h-[60px] bg-[#272727] hover:bg-[#212121] text-gray-300 text-xl font-bold border-none rounded-md focus:ring-0" placeholder="Enter title" type="text" />
         <div className="w-full">
         <Editor
        className="text-red-500"
        apiKey='7cvt5t1jh8r9nbnwxkupmkbkb155157rsyrknie4tio8qvdu'
        onInit={(evt, editor) => editorRef.current = editor}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; color:white; background-color: #272727;}'
        }}
      />
         </div>
         <div className="w-full h-auto rounded-md bg-[#353535] py-4 px-3 flex gap-3">
           <button type="submit" className={isLoading ? "opacity-25 bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold text-sm rounded-md px-2 py-2" : "bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold text-sm rounded-md px-2 py-2"}>CREATE POST</button>
           <button className="border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-500 border text-white font-bold text-sm rounded-md px-2 py-2">SAVE AS DRAFT</button>
         </div>
       </div>
       </form>
     </div>
     <Footer></Footer>
    </>
    
  )
}




