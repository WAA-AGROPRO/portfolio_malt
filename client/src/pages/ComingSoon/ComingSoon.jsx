import React from 'react'
import "./ComingSoon.scss"
import Title3D from "../../components/Title3D/Title3D"
import { Link } from "react-router-dom"

function ComingSoon() {
  return (
    <div className="coming-soon">
          <Title3D />
          <p className="coming-soon__text">Notre site est encore en maintenance !</p>  
          <Link className='coming-soon__btn' to="/">Retour à la page d'accueil</Link>     
       
    </div>
  )
}

export default ComingSoon