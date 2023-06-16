
import './Expertise.scss'
import PresenceDigitale from "../../assets/presence.svg"
import Objectifs from "../../assets/objectif.svg"
import NouvelleClientele from "../../assets/attirez.svg"
//Logo prplecat clicak effet on hover text appear click there
function Expertise() {
  return (
    <div className="expertise">
        <h1 className="title">Expertise</h1>
        <main className="expertise__content">
                <div className="expertise__card">
                    <div className="expertise__card__head">
                        <h5 className="card__title">
                            <span>
                                Affirmez votre
                            </span>
                            <br />
                            Présence digitale
                        </h5>
                        <img src={PresenceDigitale} alt="presence digitale" className="logo-expert" />
                        
                    </div>
                    <div className="expertise__card__content">
                        <p className="card__text">
                        Créez et maintenez une visibilité active afin d'intéragir efficacement avec votre clientèle.
                     </p>
          
                    </div>
                </div>
                <div className="expertise__card expertise__card--orange">
                    <div className="expertise__card__head">
                        <h5 className="card__title card__title--black">
                            <span>
                                Réalisez
                            </span>
                            <br />
                                Vos objectifs
                        </h5>
                        <img src={Objectifs} alt="objectifs" className="logo-expert" />
                        </div>
                    <div className="expertise__card__content">
                <p className="card__text">
                    Devenez acteur du Web pour vous démarquez de la concurrence et augmenter grandement la notoriété de votre business.
                </p>
                
                </div>
                </div>
                <div className="expertise__card">
                <div className="expertise__card__head">
                    <h5 className="card__title">
                        <span>
                            Attirez une
                        </span>
                        <br />
                            Nouvelle clientèle
                     </h5>
                     <img src={NouvelleClientele} alt="nouvelle clientele" className="logo-expert" />
                    
                </div>
                <div className="expertise__card__content">
                <p className="card__text">
                Développez un moyen de renforcer votre marque, d'établir la confiance, de partager des informations et de promouvoir vos produits ou services à une audience plus large et plus diversifiée.
                
                </p>
               
                </div>
                </div>
           
        </main>
    </div>
  )
}

export default Expertise