import React from 'react'

function ExpertiseBefore() {
  return (
    <div>
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
           
    </div>
  )
}

export default ExpertiseBefore    