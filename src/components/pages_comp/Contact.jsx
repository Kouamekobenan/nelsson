import React from 'react'
import imgs from '../../images/meet.png'

function Contact() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center shadow-2xl shadow-zinc-600  md:flex-row-reverse items-center gap-4">
        <section className="Stit relative text-center ">
          <span className="uppercase">Rendre en contact avec moi</span>
          <span className="">
            <img src={imgs} alt="" className=" hover:bg-orange-500 w-full"/>
            <span className="absolute w-full flex flex-col 
            justify-center items-center top-0 opacity-0 duration-700 hover:opacity-60 text-center h-full bg-gray-800">
              <h1 className="Stit">travaillons ensemble </h1>
              <small>je suis ouvert a travailler en equipe ou a aider les
                 personnes dans leurs tâches informatiques</small>
            </span>
          </span>
          </section>
        <section>
          <form action="" className="flex flex-col gap-4 bg-gray-700 p-4 rounded-lg">
            <input type="text" placeholder="votre nom " className="Inputs"/>
            <input type="text" placeholder="votre email" className="Inputs"/>
            <textarea name="" rows="10" cols="10" id="" placeholder="description" 
            className="rounded-xl text-center text-2xl text-black"></textarea>
            <span className="Cbutton flex justify-center text-center items-center">Envoyer</span>
          </form>
        </section>
        </div>
    </div>
  )
}

export default Contact