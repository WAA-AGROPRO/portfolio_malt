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

function ExperitiseWeb() {
  return (
    <div className="expertise-page">
      <section className="expertise-page__hero">
          <ExperitiselLandingPage
            title="Création de site Web"
            paragraph="Vous avez un projet de création ou de refonte de site ? Nous vous assurons un projet engageant et cohérent ! Que ce soit un site vitrine ou un site e-commerce, faites le choix de la performance et de l’élégance avec un site à votre image."
          />
      </section>  
      {/* 
      <section className="expertise-page__article">
        Articles
      </section>
      */}
      <section className="expertise-page__etapes">
        <h2 className="expertise-page__etapes__title">Les étapes pour un projet de site WEB réussie</h2>
        <div className="expertise-page__etapes__container">
          <Etape 
            title="Analyse complète des besoins" 
            text="Nous débutons en effectuant une analyse approfondie des besoins du client, en explorant en détail les objectifs du projet, et en identifiant les fonctionnalités essentielles."
            img={Feature_1}
            />
          <Etape
            title="Planification stratégique"
            text="Nous établissons ensuite une planification stratégique détaillée, en définissant la portée du projet, les échéanciers précis, les ressources nécessaires, et les jalons clés."
            img={Feature_2}
           />
          <Etape
            title="Conception créative"
            text="Notre équipe de conception crée des maquettes et des prototypes visuels qui donnent vie à la vision du site web, en élaborant une architecture de l'information intuitive."
            img={Feature_3}
          />
          <Etape 
            title="Développement et intégration"
            text=" Nos développeurs web chevronnés transforment les conceptions en un site web fonctionnel en utilisant les dernières technologies et langages de programmation."
            img={Feature_4}
          />
          <Etape
            title="Tests et lancement"
            text="Nous testons minutieusement chaque page et chaque fonctionnalité du site web, en nous assurant qu'il fonctionne parfaitement sur tous les navigateurs et appareils."
            img={Feature_5}
          />
          <Etape
            title="Maintenance et soutien"
            text="Nous offrons un soutien continu et une maintenance du site web, en nous assurant que le site web continue de fonctionner à son plein potentiel."
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

export default ExperitiseWeb