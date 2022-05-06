import React from 'react'
import Men from '../assets/men.jpg'

export default function HeaderProfile() {



  return (
      <>
      <div className="w-full h-auto lg:bg-[#353535] flex px-[50px] lg:px-[300px] py-[70px] border-b-4 border-[#404040]">
      <div className="lg:flex flex flex-col pl-[150px]">
        <div>
          <img className="lg:absolute w-[150px] h-[150px] rounded-full object-cover border-[6px] border-[#404040] left-[250px] top-[100px]" src={Men} alt="logo" />
        </div>
        <div className="flex flex-col mr-3">
          <h1 className="mb-4 flex items-center">
            <span className="text-white font-semibold text-2xl">@cmartdec</span>
            <span>
              <a className="bg-gradient-to-r from-amber-700 to-red-500 text-white font-bold py-[3px] px-2 rounded text-xs ml-3"href="/settings">Settings</a>
            </span>
          </h1>
          <p className="text-gray-400">description afisdbfisdfbsdif sdiufh aiosdfhsudfhaos idfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguhidfuhaosidfuyga soiauyhfo iaufusdhfoa iusdhfpao idguhap siodguh</p>
        </div>
      </div>
    </div>
      </>
  )
}



