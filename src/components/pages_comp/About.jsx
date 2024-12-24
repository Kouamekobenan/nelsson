import React from 'react'
import imgs from '../../images/M2.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link, Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';


const Section = ({ name, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Element name={name} className={`section ${inView ? 'visible' : ''}`} ref={ref}>
      {children}
    </Element>
  );
};
function About() {
  return (
    <div className="container">
      
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-2">
        <section className="md:p-4 flex flex-col justify-center items-center " name="section1">
            <img src={imgs} alt="" className="cercle border-8 imgs rounded-full
            btn_over bg-orange-500 shadow-2xl shadow-orange-400"/>
        </section>
        <section className="flex flex-col gap-4 justify-center " name="section2">
            <aside className="flex flex-col gap-4  text-justify">
                <span className="Gtit"> <span className="Stit text-white">Je suis</span> Kouame kobenan noel </span>
                 <span class="content__text">
                    <h2 className="Logiciel Stit" id="invit">Développeur logiciel</h2>
                    <h2 className="Logiciel Stit" id="cv">Développeur fullstack</h2>
                    <h2 className="Logiciel Stit" id="servi">Développeur react</h2>
                </span>
                <span className="text-2xl italic font-serif ">Etudiant a l'institut de formation cefat-inter de bondoukou, devéloppeur junior avec 3 années d'experiences</span>
                <span className="text-2xl font-bold">Nationalité: <small className="Stit">Ivoirienne</small> </span>
            </aside>
            <aside className="icon flex flex-col gap-4">
              <span><button className="Cbutton btn_over">Contact moi</button></span>
              <span className="flex gap-2 w-full justify-evenly">
                <small className="Over_icon btn_over"><FaFacebookF/>
                </small>
                <small className="Over_icon btn_over"><FaInstagram/></small>
                <small className="Over_icon btn_over"><FaTwitter/></small>
                <small className="Over_icon btn_over"><FaLinkedin/></small>
                <small className="Over_icon btn_over"><FaWhatsapp/></small>
              </span>
            </aside>
        </section>
      </div>
    </div>
  )
}

export default About
