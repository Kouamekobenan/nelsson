import React from 'react'
import About from '../components/pages_comp/About'
import What from '../components/pages_comp/What'
import Propos from '../components/pages_comp/Propos'
import Avaible from '../components/pages_comp/Avaible'
import Contact from '../components/pages_comp/Contact'
import { GoArrowUp } from "react-icons/go";


function Home() {
  return (
    <div className="container globalColor Ctext flex flex-col gap-3 p-4">
      <div className="fixed flex justify-center items-center right-5 bottom-5 
      cursor-pointer w-12 h-10 p-2 bg-blue-500 rounded-full text-white font-bold text-2xl"><a href="#"><GoArrowUp /></a></div>
     <About/>
     <div className="flex justify-center">
      <span className="bg-gray-700 h-1 w-1/2 rounded-e-full"></span>
      </div>
     <What/>
     <div className="flex justify-center  ">
      <span className="bg-gray-700 h-1 w-1/2 rounded-e-full"></span>
      </div>
      <Propos/>
      <Avaible/>
      <Contact/>

    </div>
  )
}

export default Home
