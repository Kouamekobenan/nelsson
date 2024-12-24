import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiElectron } from "react-icons/si";

function What() {
    const data=[
        {
            id:1,
            title:"JAVASCRIPT",
            icon:<IoLogoJavascript/>,
            text:"J'utilise du js pour le développement des mes sites web du coté front end et back end. ",

        },
        {
            id:2,
            title:"Mysql ",
            icon:<SiMysql />,
            text:"Mysql me permet de creer des différents requête de mes applications ",

        },
        {
            id:3,
            title:"REACT JS ",
            icon:<FaReact/>,
            text:"C'est le Framwork que j'utilise pour creer la partie front end de mes app web",

        },
        {
            id:4,
            title:"Electron js",
            icon:<SiElectron />,
            text:"C'est un langage qui me permet de développer des logiciels comptables et bien d'autre ",

        },
        {
            id:5,
            title:"Tailwindcss",
            icon:<SiTailwindcss />,
            text:"un framework perttant de designé la partie client de mes applications ",

        },
        {
            id:6,
            title:"Node js ",
            icon:<FaNodeJs />,
            text:"node js me permet de concevoir la partie backend de mes applications ",
        },
    ]

  return (
    <div className="container">
        <div className="Stit flex justify-center md:text-3xl">
            <span>Qu'est ce que je fait ?</span>
        </div>
        <div className="Blog flex flex-col gap-4 md:grid md:grid-cols-3 p-4">
            {
                data.map((datas)=>(
                    <div className="flex flex-col gap-3 border-2 rounded-xl hover:scale-105 hover:shadow-2xl 
                    hover:shadow-orange-400 shadow-sm shadow-orange-400
                     border-gray-500 p-3 hover:bg-gray-500 duration-700 cursor-pointer  " key={datas.id}>
                        <span className="icon w-9 text-center flex justify-center text-orange-500 font-bold
                        flex-col rounded-full p-1 bg-slate-700 text-2xl items-center">{datas.icon}</span>
                        <span className="title Stit text-blue-100 flex justify-center uppercase">{datas.title}</span>
                        <span className="text-2xl font-serif">{datas.text}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default What