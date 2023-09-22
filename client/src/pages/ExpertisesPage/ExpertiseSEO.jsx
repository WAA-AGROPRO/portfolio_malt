import "./ExpertisePage.scss"       
import Etape from "../../components/Etape/Etape"
import { Link } from "react-router-dom"
import ExperitiselLandingPage from "../../layout/ExpertiseLandingPage/ExpertiseLandingPage"
import Feature_1 from "../../assets/hero_assets/feature-icon-01.svg"
import Feature_2 from "../../assets/hero_assets/feature-icon-02.svg"
import Feature_3 from "../../assets/hero_assets/feature-icon-03.svg"
import Feature_4 from "../../assets/hero_assets/feature-icon-04.svg"
import Feature_5 from "../../assets/hero_assets/feature-icon-05.svg"
import Feature_6 from "../../assets/hero_assets/feature-icon-06.svg"


function ExpertiseSEO() {
  return (
    <div className="expertise-page">
      <section className="expertise-page__hero">
          <ExperitiselLandingPage
            title="Référencement SEO"
            paragraph="Boostez votre visibilité en ligne et augmentez vos conversions avec notre expertise en référencement SEO. Confiez-nous votre projet dès aujourd'hui et découvrez comment nous pouvons propulser votre site vers les sommets des moteurs de recherche."
          />
      </section>  
      {/* 
      <section className="expertise-page__article">
        Articles
      </section>
      */}
      <section className="expertise-page__etapes">
        <h2 className="expertise-page__etapes__title">Les étapes pour un projet de référencement réussie</h2>
        <div className="expertise-page__etapes__container">
          <Etape 
            title="Audit SEO Initial par Notre Équipe d'Experts" 
            text="Nous lançons un audit complet pour évaluer l'état actuel du site web, identifier les problèmes de référencement et établir une base solide."
            img={Feature_1}
            />
          <Etape
            title="Recherche de Mots-Clés Approfondie"
            text="Nous effectuons une recherche approfondie de mots-clés pertinents pour votre secteur, en mettant en lumière les opportunités de trafic et de conversion."
            img={Feature_2}
           />
          <Etape
            title="Optimisation On-Page Par Nos Spécialistes "
            text="Nous optimisons les éléments essentiels sur chaque page, tels que les balises title, les méta-descriptions et les en-têtes, en les alignant avec des mots-clés stratégiques."
            img={Feature_3}
          />
          <Etape 
            title="Amélioration de la Vitesse de Chargement"
            text=" Nous maximisons la vitesse de chargement en optimisant les images, en minimisant le code, et en mettant en place des techniques de mise en cache."
            img={Feature_4}
          />
          <Etape
            title="Optimisation d'Images et Média"
            text="Nous optimisons les images avec des balises ALT descriptives et intégrons des médias riches, tels que des vidéos et des images pertinentes."
            img={Feature_5}
          />
          <Etape
            title="Stratégie de Backlinks"
            text="Nous développons une stratégie de création de liens pour obtenir des liens de haute qualité à partir de sources pertinentes."
            img={Feature_6}
          />        
        </div>
      </section>
    {/*
      <section className="expertise-page__whyus">
        Pourquoi-nous ?
      </section>
    */}
      <section className="expertise-page__cdc">
        <div className="expertise-page__cdc__container">
        <h3 className="expertise-page__cdc__title">
            Modèle de cahier des charges pour votre projet !
          </h3>
          <p className="expertise-page__cdc__text">
            Pour faciliter la compréhension de votre projet, nous vous proposons un modèle de cahier des charges. 
            <br />
            Ce document vous permettra de définir vos besoins et vos attentes. Il vous permettra également de définir les objectifs de votre projet et de définir les moyens à mettre en place pour les atteindre.
          </p>
          <Link target="_blank" to="/coming-soon" className="expertise-page__cdc__btn">Télécharger le modèle</Link>
         </div>
        
      </section> 
    </div>
  )
}

export default ExpertiseSEO