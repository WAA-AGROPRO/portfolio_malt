import "./Blog.scss"
import { Link } from "react-router-dom"

function Article_4() {
  return (
    <main className='blog'>
        <h1 className="blog__title back_4">
          <span className="blog__title__text">
          Une app iOS et Android entre 3 et 15 k€, comment est-ce possible ?
          </span>
          <p className="blog__infos__author">Par {" "}<span className="blog__infos__author__name">{" "} W. Alain</span></p>
        </h1>
        <div className="blog__content">
          <p className="blog__content__intro">
          WAA innove en concevant des outils mobile pour nos clients. Pour créer des applications à vos cotés, nous utilisons notre logiciel de création d'application FlutterFlow et Firebase.< br />
            </p>

            <div className="blog__content__bloc">
              <h2 className="blog__content__title">Nous créons votre app avec vous</h2>
              <div className="blog__content__article">
              <img className="blog__content__img" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Image by CHUTTERSNAP" />
                <div className="blog__content__paragraph">
                  <p className="blog__content__text">
                  En utilisant notre plateforme pour nous soumettre vos projets, nous vous proposons des prix défiant la concurrence pour un produit plus personnalisé.
                  < br />
                  </p>
                  <p className="blog__content__text">
                  Vous pouvez suivre en directe le développement de création de votre applis mobile sur un espace ouvert pour interagir avec nos équipes.
Pour apporter les corrections en mode agile et horodaté, qui fait du décompte du temps, la possibilité de ne pas perdre la charge de travail que vous payer.
    
    < br />
                  </p>
                  <p className="blog__content__text">
                  Afin d'éviter des itérations inutiles, nous co-créons l'application à vos côtés et nous atteignons plus efficacement ce que vous attendez.
                <br />
                 </p>
                </div>
              </div>
            </div>

            <div className="blog__content__bloc">
              <h2 className="blog__content__title">Nous pratiquons des prix justes</h2>
              <div className="blog__content__article reverse">
              <img className="blog__content__img" src="https://cdn.pixabay.com/photo/2016/08/15/15/30/mobile-phone-1595731_1280.jpg" alt="Image by Florian Steciuk" />
                <div className="blog__content__paragraph">
                  <p className="blog__content__text">
                  Quelque soit la taille de votre entreprise, nous appliquons toujours le juste prix. Notre objectif est de justifié auprès de nos clients la qualité du suivi du travail !
                < br />
                  </p>
                </div>
              </div>
            </div>
            <div className="blog__content__bloc">
              <h2 className="blog__content__title">Vous n'avez pas de budget et vous souhaitez créer votre app ?</h2>
              <div className="blog__content__article">
                <img className="blog__content__img" src="https://images.unsplash.com/photo-1669881336715-5a51a78d5434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" alt="Image by Aakash Dhage" />
                <div className="blog__content__paragraph">
                  <p className="blog__content__text">
                  Nous pouvons vous aider avec notre partenaire financier, qui prend en charge le financement de votre applications.
                  < br />
                  </p>
                  <p className="blog__content__text">
                  
                  Une application qui reste à la disposition du prêteur qui pourra vous céder tous les droits une fois le financement rembourser.
                  < br />
                  </p>
                  <p className="blog__content__text">
                  En fonction des conditions générale du prêt souscrit avec notre service de courtage.
Un service qui bénéficie de l' agrément Orias.
Nous soumettons vos dossiers à nos partenaires financiers, membre de notre réseau d' accompagnement.Enfin, un site web réactif peut contribuer à améliorer le taux de conversion, c'est-à-dire la proportion de visiteurs effectuant une action précise, comme un achat ou une demande de devis. Étant donné que de plus en plus d'achats et de demandes de devis sont effectués via des appareils mobiles, compter uniquement sur un site conçu pour les ordinateurs serait une limitation, susceptible de vous priver d'opportunités sur le marché et d'affecter votre présence en ligne.
                  < br />
                  </p>
                </div>
              </div>
            </div>
            


        </div>
        <Link to="/contact" className="informations__button">J'ai un projet à soumettre</Link>

    </main>
  )
}

export default Article_4    