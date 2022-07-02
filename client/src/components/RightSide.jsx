import React from 'react'

export default function RightSide() {
  return (
      <>
       <a className="font-sans text-sm text-white mr-3 font-bold" href="#">FAQ</a>
       <a className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[9px] px-3 rounded text-xs"href="/signup">SIGN UP</a>
       <a className="ml-[10px] text-white font-bold py-[8px] px-3 rounded text-xs border border-orange-500 hover:bg-gradient-to-r from-amber-700 to-red-800" href="/login">LOG IN</a>
      </>
  )
}
