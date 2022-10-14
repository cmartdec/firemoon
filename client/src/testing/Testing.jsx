import React from 'react'
import { useState } from 'react'
import Group1 from '../assets/Group1.svg'

export default function Testing() {



  const [counter, setCounter] = useState();

  return (
    <>
    <div className="flex gap-3 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-orange-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>

    <h1>Listen to podcast</h1>
    </div>

      
    </>
  )
}
