import "./Footer.scss"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <section className="footer__sec">
          <h2 className="footer__sec__title waa-spec">WAA</h2>
          <ul className="footer__sec__ul">
            <li className="footer__sec__li">
              <p className="footer__sec__li">N°de SIRET -	84964444800037</p>
            </li>
            <li className="footer__sec__li">
              <p className="footer__sec__li">Adresse postale -51 RUE AUDIBERT LAVIROTTE 69008 LYON</p>
            </li>
            <li className="footer__sec__li">
              <p className="footer__sec__li">Support</p>
            </li>
          </ul>
        </section>
        <section className="footer__sec">
          <h2 className="footer__sec__title">Site</h2>
          <ul className="footer__sec__ul">
            <li className="footer__sec__li">
            <Link className="footer__sec__li" to="/">Accueil</Link>
            </li>
            <li className="footer__sec__li">
              <Link className="footer__sec__li" to="/offres">Offres</Link>
            </li>
            <li className="footer__sec__li">
              <a className="footer__sec__li" href="https://www.malt.fr/profile/alainwodie?q=alain+wodie&searchid=648b15662f119c29acf88aaf">Mission Malt</a>
            </li>
          </ul>
        </section>
        <section className="footer__sec">
          <h2 className="footer__sec__title">Informations</h2>
          <ul className="footer__sec__ul">
          <li className="footer__sec__li">
              <Link className="footer__sec__li" to="/contact">Nous contacter</Link>
            </li>
            <li className="footer__sec__li">
              <Link className="footer__sec__li" to="/cgv">Conditions Générales de Vente</Link>
            </li>
            <li className="footer__sec__li">
              <Link className="footer__sec__li" to="/politique_confidentialite">Politiques de confidentialité</Link>
            </li>
          </ul>
        </section>
        <section className="footer__sec">
          <h2 className="footer__sec__title">Liens externes</h2>
          <ul className="footer__sec__ul">
          <li className="footer__sec__li">
            <a className="footer__sec__li" href="https://www.malt.fr/profile/alainwodie?q=alain+wodie&searchid=648b15662f119c29acf88aaf">Malt</a>
          </li>
          <li className="footer__sec__li">
            <a className="footer__sec__li" href="https://agroproannonce.shop/fr/">Agropro Annonce</a>
          </li>
          <li className="footer__sec__li">
            <a className="footer__sec__li" href="http://kevin-rakotoniaina.com/">Kévin - Développeur</a>
          </li> 
          
          </ul>
        </section>
      </div>
      <p className="footer__copyright">Copyright © 2023 - 
      <span className="footer__waa">WAA-AGROPRO.</span>
      {" "} All Rights Reserved.</p>
    </div>
  )
}

export default Footer