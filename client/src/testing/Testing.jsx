import React from 'react'
import Topbar from '../components/Topbar'
import { useQuery } from 'react-query'
import axios from 'axios'



export default function Testing() {
  
  const fetchAllPosts = async() => {
   const { data } = await axios.get("http://localhost:5000/api/post/getAllPosts");
   return data;
    }

  const { isLoading, data } = useQuery(["posts"], fetchAllPosts, {initialData: () => {
    return fetchAllPosts();
  }});

  const array =[{"name":"test1"},{"name":"test2"}];
  console.log(typeof(array))
  console.log(array);
  console.log(data);


  return (
    <>
     <Topbar></Topbar>
     {array.map(function(d, idx) {
       return (<h1 key={idx}>{d.name}</h1>)
     })}
    </>
  )
}








