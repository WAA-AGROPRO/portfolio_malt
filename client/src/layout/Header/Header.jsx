import "./Header.scss"
import { Link } from "react-router-dom"


function Header() {
  return (
    <div className="header">
      <Link to="/" className="sweet-title header__logo">WAA</Link>
      <div className="header__nav">
        <Link to="/offres" className="header__link">Offre</Link>
        <a href="https://www.malt.fr/project/new?q=Alain+Wodie&viewId=648ac8287891d212d9e1845a&searchid=648ac817d5cb10275a73aedb&freelanceId=642acf3a8159307a3f4d2e5b" className="header__link" target="_blank" rel="noreferrer">Mission</a>
        <a onClick={() => (window.location = "mailto:contact@agroproannonce.com")} className="header__link">Contact</a>
      </div>
    </div>
  )
}

export default Header