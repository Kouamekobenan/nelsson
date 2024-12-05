import React from 'react'
import img from '../../images/M7.png'
function Propos() {
  return (
    <div className="container flex flex-col gap-4 md:grid md:grid-cols-2 p-4
    border-2 border-gray-700 rounded-xl">
        <div className="">
            <span>
                <img src={img} alt="" className="bg-orange-500 rounded-full 
                "/>
            </span>
        </div>
        <div className="flex flex-col justify-center md:text-2xl">
             <span>Salut❕✋</span>
                <span>Je me présent <small className="Stit logi">Nelson_12</small> alias le <b className="Stit"> Guide. </b>
                Je suis de nationnalité ivoirienne resident à <strong> Abidjan</strong> Un passioné de l'informatique avec un grand objectif a aporté au monde pour améliorer 
                le monde de l'informatique à ma manière.
                Par consequent, je suis prêt pour repondre à tous vos bésoin en informatique.
                En effet ma satisfaction est de pouvoir vous apportés mon aide dans ce domain de l'informatique pour la rentabilité de votre entreprise.
                Les solutions technologique sont enormes il ya plusieurs problèmes que l'informatique resous à savoir le gain de temps,
                la confidentialité de l'information, stocké les données pour une durée enorme, la sécurités des informations etc. 
                En fin, il sérait indéniable pour tout le monde de se retourné vers l'univers de l'informatiqe pour mettre de l'ordre dans sa vie!.
                 </span>
        </div>
    </div>
  )
}

export default Propos