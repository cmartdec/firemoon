import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Testing() {

  const handleClick = () => {
    toast.success("Sucess notification.", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      pauseOnHover: false
    })
  }
  return (
    <>
    <div>
      <button onClick={handleClick} className="bg-blue-500 rounded">Notify</button>
      <ToastContainer></ToastContainer>
    </div>
     
    </>
  )
}





