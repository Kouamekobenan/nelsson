import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="container w-full globalColor flex flex-col 
    gap-4 md:flex md:flex-row md:justify-around p-4 Ctext border-t-4 border-t-white">
      <section className="coord flex flex-col gap-4 text-2xl">
        <span className="Gtit">Coordonnées</span>
        <span className="font-mono flex gap-2"><span><BsFillTelephoneForwardFill/></span> +225 0506832678</span>
        <span className="font-mono flex gap-2"> <span><FaWhatsapp/></span> 0506832678</span>
        <span className="font-mono flex gap-2"> <span><MdOutlineMail /></span>kouamenelson47@gmail.com</span>
        <span className="font-mono flex gap-2"> <span><FaLocationDot/></span> Bondoukou/Zanzan</span>
      </section>
      <section className="coord flex flex-col gap-4 text-2xl">
        <span className="Gtit">Formation</span>
        <span className="font-mono">✔ Stage a Intellect Immobillier</span>
        <span className="font-mono">✔ formation a Ivoire agence</span>
        <span className="font-mono">✔ formation vba chez kf service</span>
      </section >
      
    </div>
  )
}

export default Footer
