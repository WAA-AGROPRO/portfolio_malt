import "./Avis.scss"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

function Avis() {
  return (
    <div className="avis">
        <section className="avis__left">
            <h2 className="avis__left__title">Votre avis nous intérresse !</h2>
            <p className="avis__left__text">Partagez votre expérience avec nous et aidez-nous à continuer à vous offrir le meilleur service possible. Votre avis est précieux et nous sommes impatients de le lire. 
            </p>
            <Link target="_blank" to="https://g.page/r/CW2C4X6pLyHeEBI/review" className="avis__left__button">Laisser un avis</Link>
            <Link target="_blank" to="https://g.page/r/CW2C4X6pLyHeEBI/" className="avis__left__button">Notre fiche Google</Link>           
        </section>
        <section className="avis__right">
            <div className="avis__right__container">
                <h2 className="avis__right__container__title">WAA-AGROPRO</h2>
                <p className="avis__right__container__text">Concepteur de site Web</p>
                <div className="stars__avis">
                {[...Array(5)].map((_, index) => 
    {
        return (
            <FaStar key={index} className="avis__right__container__star" size={50} color={"#FFD700"}/>
        )
    }
)}

                </div>
                <p className="avis__right__container__text">5/5 sur Google</p>
                
            </div>
        </section>
    </div>
  )
}

export default Avis