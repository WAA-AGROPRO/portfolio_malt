import "./Offres.scss";
import basicLogo from "../../assets/basic.jpg";
import standardLogo from "../../assets/standard.jpg";
import premiumLogo from "../../assets/premium.jpg";
import { Link } from "react-router-dom";

function Offres() {
  return (
    <div className="offres">
        <h1 className="offres__title">Digitalisez-vous dès maintenant !</h1>
        <h2 className="offres__legends">Découvrez les différents packs proposés</h2>
        <main className="offres__container">
        <section className="offres__card">
                <div className="offres__head">
                    <h3 className="offres__head__title">Basic</h3>
                        <img src={basicLogo} className="offres__head__img" alt="standard logo Designed by slidesgo / Freepik" />
                    <h4 className="offres__head__prix">
                    <span className="apartir">À partir de </span>400 €</h4>
                </div>
                <div className="offres__content">
                    <ul className="offres__content__list">
                        <li className="offres__content__list__item">Site vitrine ou portfolio</li>
                        <li className="offres__content__list__item">Intégration du contenu statique et dynamique</li>
                        <li className="offres__content__list__item">Site web adapter à toutes les plateformes</li>
                        <li className="offres__content__list__item">Optimisation SEO</li>
                    </ul>
                </div>
                <div className="offres__footer">
                
                <Link to="/contact" className="offres__footer__link">Contactez-nous</Link>  
                   
                </div>
            </section>
            <section className="offres__card">
                <div className="offres__head">
                    <h3 className="offres__head__title">Standard</h3>
                    <img src={standardLogo} className="offres__head__img" alt="standard logo Designed by slidesgo / Freepik" />
                    <h4 className="offres__head__prix">
                    <span className="apartir">À partir de </span>
                        900 €</h4>
                </div>
                <div className="offres__content">
                <ul className="offres__content__list">
                        <li className="offres__content__list__item">Site web ou application mobile</li>
                        <li className="offres__content__list__item">Intégration du contenu statique et dynamiqye</li>
                        <li className="offres__content__list__item">Site web adapter à toutes les plateformes</li>
                        <li className="offres__content__list__item">Application mobile Android</li>
                        <li className="offres__content__list__item">Optimisation SEO</li>

                    </ul>
                </div>
                <div className="offres__footer">
                <Link to="/contact" className="offres__footer__link">Contactez-nous</Link>      
                </div>
            </section>      
            <section className="offres__card">
                <div className="offres__head">
                    <h3 className="offres__head__title">Premium</h3>
                    <img src={premiumLogo} className="offres__head__img" alt="standard logo Designed by slidesgo / Freepik" />
                    <h4 className="offres__head__prix">
                    <span className="apartir">À partir de </span>
                        1400 €</h4>
                </div>
                <div className="offres__content">
                <ul className="offres__content__list">
                        <li className="offres__content__list__item">Boutique en ligne</li>
                        <li className="offres__content__list__item">Intégration du contenu statique et dynamiqye</li>
                        <li className="offres__content__list__item">Base de données SQL ou noSQL</li>
                        <li className="offres__content__list__item">Site web adapter à toutes les plateformes</li>
                        <li className="offres__content__list__item">Application mobile Android et iOS</li>
                        <li className="offres__content__list__item">Optimisation SEO</li>
                        <li className="offres__content__list__item">Assistance au déploiement inclus</li>
                    </ul>
                </div>
                <div className="offres__footer">
                <Link to="/contact" className="offres__footer__link">Contactez-nous</Link>  
                </div>
            </section>
        </main>
    </div>
    )
}

export default Offres