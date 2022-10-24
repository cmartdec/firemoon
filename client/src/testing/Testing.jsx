import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Testing() {

  const [file, setFile] = useState();

  const submit = async(e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", file);
    console.log(formData);

  }

  return (
    <>
     <form onSubmit={submit}>
       <input onChange={e => setFile(e.target.files[0])} type="file" accept="image/*" />
       <button className="bg-blue-500 ml-3" type='submit'>Submit</button>
     </form>

      
    </>
  )
}
