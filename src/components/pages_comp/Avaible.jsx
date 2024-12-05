import React from 'react'
import { FaRegCircleDown } from "react-icons/fa6";

function Avaible() {
  return (
    <div className="container dispo flex justify-evenly border-2 border-gray-700 px-2 py-6
     md:p-6">
        <div className="flex flex-col justify-center md:text-2xl font-bold font-serif">Je suis disponible pour vous!</div>
        <div className="">
            <span className="Cbutton text-sm  md:text-2xl btn_over"> Contactez-moi
        </span>
        </div>
    </div>
  )
}

export default Avaible