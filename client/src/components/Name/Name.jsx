import "./Name.scss";
import { Link } from "react-router-dom";


function Name() {
  return (
    <div className="name">
      <div className="name__container">
        <h1 className="name__title">Besoin d'un site Web ou d'une application mobile ?</h1> 
      </div>
        <h2 className="fancy">Découvrez nos offres</h2>
        <div className="name__offres">
          <Link to="/offres" className="name__button">Offres packages</Link>
          <a href="https://www.malt.fr/project/new?q=Alain+Wodie&viewId=648ac8287891d212d9e1845a&searchid=648ac817d5cb10275a73aedb&freelanceId=642acf3a8159307a3f4d2e5b" className="name__button" target="_blank" rel="noreferrer">Offre personnalisé</a>
      </div>
    </div>
  )
}

export default Name