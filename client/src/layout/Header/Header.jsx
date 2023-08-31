import "./Header.scss"
import { Link } from "react-router-dom"


function Header() {
  return (
    <div className="header">
      <Link to="/" className="sweet-title header__logo">WAA</Link>
      <div className="header__nav">
        <Link to="/offres" className="header__link">Nos tarifs</Link>
        <Link to="/projets" className="header__link">Nos réalisations</Link>
        <Link to="/informations" className="header__link">Notre blog</Link>
        <Link to="/contact" className="header__link">Nous contactez</Link>
      </div>
    </div>
  )
}

export default Header