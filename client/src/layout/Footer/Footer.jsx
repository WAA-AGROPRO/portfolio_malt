import "./Footer.scss"
import Button from "../../components/Button/Button"

import maltLogo from "../../assets/malt.png"

function Footer() {
  return (
    <div className='footer'>
        
          <h2 className="footer__title">
            Je suis actuellement à la recherche de mission en Freelance.
          </h2>
          <Button
            classname="contact__button"
            action="Me contacter"
            onClick={() => (window.location = "mailto:contact@agroproannonce.com")}
          ></Button>
            <a href="https://www.malt.fr/profile/alainwodie?q=Alain+Wodie&searchid=6478689ca64b7013d557fc44" target="_blank" className="footer__a">
              <img src={maltLogo} className="footer__link " alt="malt logo" />
              <h2 className="footer__pro">Venez voir mon profil Malt</h2>
            </a>      
     
    </div>
  )
}

export default Footer