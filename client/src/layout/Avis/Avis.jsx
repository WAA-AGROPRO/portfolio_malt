import CardAvis from "../../components/CardAvis/CardAvis"
import CardAvisAlt from "../../components/CardAvis/CardAvisAlt"
import "./Avis.scss"
import { Link } from "react-router-dom"

function Avis() {
  return (
    <div className="avis">
        <section className="avis__left">
            <h2 className="avis__left__title">Votre avis nous intérresse !</h2>
            <p className="avis__left__text">Partagez votre expérience avec nous et aidez-nous à continuer à vous offrir le meilleur service possible. Votre avis est précieux et nous sommes impatients de le lire. 
            </p>
            <Link target="_blank" to="https://g.page/r/CW2C4X6pLyHeEBI/review" className="avis__left__button">Laisser un avis</Link>            
        </section>
        <section className="avis__right">
            <div className="avis__right__container">
                <div className="avis__right__bloc">
                    <CardAvisAlt 
                    txt="Super site pour avoir sa propre application. Je recommande vraiment 🤲🏻" 
                    name="Noem Music" 
                    metier="Avis Google" 
                    img="https://lh3.googleusercontent.com/a-/ALV-UjU0Zpu_-2sMSGcROUdtvX0PzrjZXxQPSvsWbCI7KZTmatk=w120-h120-p-rp-mo-br100" />
                    <CardAvis 
                    txt="Très attrayant !" 
                    name="Alexandra Matlina" 
                    metier="Avis Google" 
                    img="https://lh3.googleusercontent.com/a-/ALV-UjXLUWHBY2tWfG_xCyLxNBGBCau6330IAkgWFkTVLsOrbg=w120-h120-p-rp-mo-br100" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Avis