import React from 'react'
import img from '../images/M2.png'
import { GoArrowUp } from "react-icons/go";


function Apropos() {
  return (
    <div className="container globalColor Ctext p-4 flex flex-col md:grid  md:grid-cols-2 ">
        <div className="fixed flex justify-center items-center right-5 bottom-5 
      cursor-pointer w-12 h-10 p-2 bg-blue-500 rounded-full text-white font-bold text-2xl"><a href="#"><GoArrowUp /></a></div>
        <div className="">
            <img src={img} alt="" className="cercle border-8 rounded-full btn_over bg-orange-500 hover:shadow-2xl hover:shadow-orange-400" />
        </div>
        <div className="Opacity text-justify flex flex-col 
         justify-center items-center md:pr-8 md:text-2xl">
            <span > <small className="Stit">Nelson_12 </small>
            Developpeur logiciel en <small className="Stit"> React js </small>
            et en <small className="Stit">Electron js </small>
             est un informaticien de 3ans d'experience.
             <small className="font-bold italic text-2xl"> étudiant a l'institut de formation cefat-inter de bondoukou </small>
              Il est né à Bondoukou 
            <small className="Stit"> en decembre 2003, </small>
            il est courageux, rigoureux dans le travail et considere le metier de l'informatique comme une patient
            total.
            Son but est d'aider la societé dans sa tâche informatique
            </span>
        </div>
    </div>
  )
}
export default Apropos