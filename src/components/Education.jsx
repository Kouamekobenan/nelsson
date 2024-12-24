import React from 'react'
import { GoArrowUp } from "react-icons/go";


function Education() {
  return (
    <div className="container globalColor p-4 Ctext">
        <div className="fixed flex justify-center items-center right-5 bottom-5 
      cursor-pointer w-12 h-10 p-2 bg-blue-500 rounded-full text-white font-bold text-2xl"><a href="#"><GoArrowUp /></a></div>
        <div className="blog flex flex-col md:flex-row gap-4 justify-center ">
            <section className="flex flex-col gap-4 border-4 border-gray-500 rounded-xl p-4
            hover:shadow-2xl hover:shadow-orange-400
             btn_over">
              <div className="title Gtit text-blue-100">competence proffessionnelle</div>
              <div className="">
              <span className="Stit text-white">Front end</span>
              <span className=" flex">
                <small className="w-10/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-2/12 flex justify-end text-black font-bold text-xl"></small>
              </span>

              </div>
              <div className="">
              <span className="Stit text-white">React js</span>
              <span className=" flex">
                <small className="w-9/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-3/12 flex justify-end font-bold text-black text-xl"></small>
              </span>

              </div>
              <div className="">
              <span className="Stit text-white">Electron js</span>
              <span className=" flex">
                <small className="w-8/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-4/12 font-bold flex justify-end text-black text-xl"></small>
              </span>

              </div>
              <div className="">
              <span className="Stit text-white">Back end</span>
              <span className=" flex">
                <small className="w-7/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-5/12 flex justify-end font-bold text-black text-xl"></small>
              </span>

              </div>
              <div className="">
              <span className="Stit text-white">Express js</span>
              <span className=" flex">
                <small className="w-6/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-6/12 flex justify-end font-bold text-black text-xl"> </small>
              </span>

              </div>
              <div className="">
              <span className="Stit text-white">Mysql</span>
              <span className=" flex">
                <small className="w-5/12 bg-blue-400 h-6"></small>
                <small className="bg-white h-6 w-7/12 flex justify-end font-bold text-black text-xl"></small>
              </span>

              </div>
            </section>
            <section className="flex flex-col gap-4 border-4 border-gray-500 
            hover:shadow-2xl hover:shadow-orange-400 rounded-xl p-4 btn_over">
              <div className="title Gtit text-blue-100">experience proffessionnelle</div>
            <div className="Ctext">
              <aside className='flex gap-4 justify-between border-b-2 border-b-gray-600 pb-2'>
                <article className='flex flex-col gap-2'>
                  <span className="Gtit">BTS</span>
                  <span className="text-xl italic font-serif">à l'institut de formation cefat-inter de bondoukou</span>
                </article>
                <article className="Stit">2024</article>
              </aside>
              <aside className='flex gap-4 justify-between border-b-2 border-b-gray-600 py-2'>
                <article className='flex flex-col gap-2'>
                  <span className="Gtit">BAC D</span>
                  <span className="text-xl italic font-serif">Au lycée Moderne de Yezimala</span>
                </article>
                <article className="Stit">2020-2021</article>
              </aside>
              <aside className='flex gap-4 justify-between border-b-2 border-b-gray-600 py-2'>
                <article className='flex flex-col gap-2'>
                  <span className="Gtit">BEPC</span>
                  <span className="text-xl italic font-serif">Au lycée Moderne de bondoukou</span>
                </article>
                <article className="Stit">2017-2018</article>
              </aside>
              <aside className='flex gap-4 justify-between border-b-2 border-b-gray-600 py-2'>
                <article className='flex flex-col gap-2'>
                  <span className="Gtit">STAGE</span>
                  <span className="text-xl italic font-serif">à Intellect Immobilier</span>
                </article>
                <article className="Stit">6 mois en 2023</article>
              </aside>
            </div>
            </section>
        </div>
    </div>
  )
}

export default Education