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

function ExpertiseMobile() {
  return (
    <div className="expertise-page">
      <section className="expertise-page__hero">
          <ExperitiselLandingPage
            title="Création d'application Mobile"
            paragraph="Vous avez un projet de création ou de refonte d'application mobile ? Nous vous assurons un projet engageant et cohérent ! Faites le choix de la performance et de l’élégance avec une application à votre image."
          />
      </section>  
      {/* 
      <section className="expertise-page__article">
        Articles
      </section>
      */}
      <section className="expertise-page__etapes">
        <h2 className="expertise-page__etapes__title">Les étapes pour un projet d'application Mobile réussie</h2>
        <div className="expertise-page__etapes__container">
          <Etape 
            title="Analyse complète des besoins" 
            text="Nous commençons par une analyse approfondie des besoins de nos clients, de leurs objectifs commerciaux et des fonctionnalités indispensables."
            img={Feature_1}
            />
          <Etape
            title="Conception UX/UI"
            text="Nous concevons des prototypes et des designs d'interface utilisateur intuitifs qui garantissent une expérience utilisateur exceptionnelle."
            img={Feature_2}
           />
           <Etape 
            title="Développement et intégration"
            text=" Nos développeurs mobile transforment les conceptions en une application fonctionnel en utilisant les dernières technologies et langages de programmation."
            img={Feature_4}
          />
          <Etape
            title="Sécurité Maximale"
            text="Nous intégrons des mesures de sécurité avancées pour la protection des données et la sécurité de l'application."
            img={Feature_3}
          />
          <Etape
            title="Tests et lancement"
            text="Nous testons minutieusement chaque page et chaque fonctionnalité de l'application."
            img={Feature_5}
          />
          <Etape
            title="Maintenance et soutien"
            text="Nous offrons un soutien continu et une maintenance de l'application, en nous assurant que l'application continue de fonctionner à son plein potentiel."
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
          <Link target="_blank" to="https://petite-wrist-5e0.notion.site/Cahier-des-charges-Web-WAA-6d50340687f54541a29a8753591c6d12?pvs=4" className="expertise-page__cdc__btn">Télécharger le modèle</Link>
        
          </div>
        
      </section> 
    </div>
  )
}

export default ExpertiseMobile