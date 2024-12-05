import React, {useState} from 'react'
import {bd} from '../data/db.js'
import { GoArrowUp } from "react-icons/go";

function Projets() {
  const [data, useData] =useState(bd)
  return (
    <div className="conatainer globalColor Ctext p-4">
      <div className="fixed flex justify-center items-center right-5 bottom-5 
      cursor-pointer w-12 h-10 p-2 bg-blue-500 rounded-full text-white font-bold text-2xl"><a href="#"><GoArrowUp /></a></div>
      <div className="text-center Gtit text-white">Mes projets</div>
      <div className="blog_projets flex flex-col gap-4 md:grid md:grid-cols-3">
        {
          data.map((datas)=>(
            <div 
            className="flex flex-col gap-4 border-4 border-gray-800 hover:bg-gray-700 duration-700 cursor-pointer rounded-xl p-4" key={datas.id}>
              <section className="flex justify-between">
                <span className="Stit">{datas.title}</span>
                <span className="bg-slate-300 flex flex-col justify-center 
                rounded-full items-center p-2">{datas.icon}</span>
              </section>
              
              <span className="relative ">
                <img src={datas.img} alt="" className="w-full h-80"/>
              </span>
              <span className="text-xl font-serif text-gray-300">{datas.desc}</span>
              <span className="flex justify-between">
                <small className="">
                  <a href="" className="Sbutton">{datas.code_source}</a>
                </small>
                <small className="Cbutton">
                  <a href="" >view</a>
                </small>
              </span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projets