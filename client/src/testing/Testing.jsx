import React from 'react'
import Topbar from '../components/Topbar'
import axios from 'axios'
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";



export default function Testing() {


  const {isLoading, isError, data, error} = useQuery("userData", async() => {
    const { data } = await axios.get("http://localhost:5000/api/user/getUserData");
    return data;
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  if(isError) {
    return <h1>{error}</h1>
  }

  return (
    <>
       <Topbar></Topbar>
       <div className="w-auto pl-12 flex flex-col gap-2">
         <h1 className="text-3xl">Account details:</h1>
       </div>
       <div className="h-screen w-auto pl-12 flex flex-col gap-2 mt-12">
         <h1 className="text-3xl">Account details:</h1>
         <div className="flex gap-2"><p>email:</p><p>{data.email}</p></div>
       </div>

    </>

  )
}







