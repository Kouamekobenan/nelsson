import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.jfif'
import profile from '../images/profile (1).jpg'
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdReorder } from "react-icons/io";

function Header() {
  const [open, setOpen]=useState(false)
  return (
    <div className="container globalColor Ctext 
    p-3 flex justify-between shadow-lg border-b-2 border-b-white md:flex md:justify-around">
      <div className="logo flex  gap-1 items-center">
        <img src={Logo} alt="" className="w-10 h-10 rounded-full border-4 border-orange-700"/>
        <span className="text-3xl font-serif italic douze">Nelson_12<small className="Gtit">.DEV</small></span>
      </div>
      <div className={`list flex flex-col justify-between md:flex 
      md:flex-row items-center gap-8 text-2xl ${ open ? 'absolute top-10 bg-slate-900 p-3 right-1 z-10': 'hidden' }`}>
        <span className=" Cbutton btn_over">
          <Link to="/">Accueil</Link>
          </span>
        <span className="cursor-pointer Over">
        <Link to="/propos">A propos!</Link>
        </span>
        <span className="cursor-pointer Over">
          <Link to="/education"> Education</Link>
         </span>
        <span className="cursor-pointer Over">
          <Link to="/projet">Projets</Link>
          </span>
        <span className="cursor-pointer "><img src={profile} alt="" 
        className="w-10 h-10 rounded-full border-4 border-white"/></span>
      </div>
      <div className="close md:hidden cursor-pointer" onClick={()=>setOpen(!open)}>
         {!open ? <span className=""><IoMdReorder /></span >:<LiaTimesSolid />}
        </div>
    </div>
  )
}

export default Header
