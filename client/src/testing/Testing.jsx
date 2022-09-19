import React from 'react'
import { useState, useEffect } from 'react'

export default function Testing() {

  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log("render")
  }, [])


  const handleClick = () => {
    setCounter(counter+1);
  }

  const handleReset = () => {
    setCounter(0);
  }

  return (
    <>
    <h1>{counter}</h1>
    <div className="flex gap-2">
    <button className="bg-blue-500 rounded px-2" onClick={handleClick}>Click me!</button>
    <button className="bg-red-500 rounded px-2" onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}







