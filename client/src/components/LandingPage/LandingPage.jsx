import "./LandingPage.scss"
import LandingPhoto from "../../assets/agropro-landig.jpeg"

function LandingPage() {
  return (
    <a href="https://agroproannonce.shop/fr/" className="landingpage">
        <img src={LandingPhoto} alt="agropro landing" className="landingpage__img" />
    </a>
  )
}

export default LandingPage