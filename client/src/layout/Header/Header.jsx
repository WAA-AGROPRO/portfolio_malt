import "./Header.scss"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className={`nav ${isMenuOpen ? "show" : "hide"}`}>
        <Link to="/" className="sweet-title header__logo">WAA</Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link onClick={closeMenu} to="/offres" className="nav__link">Nos tarifs</Link>  
          </li>
          <li className="nav__item">
            <Link onClick={closeMenu} to="/projets" className="nav__link">Nos réalisations</Link>
          </li>
          <li className="nav__item">
            <Link onClick={closeMenu} to="/informations" className="nav__link">Notre blog</Link>
          </li>
          <li className="nav__item">
            <Link onClick={closeMenu} to="/contact" className="nav__link">Nous contactez</Link>
          </li>      
        </ul>
          <label className="nav-b" htmlFor="check" onClick={toggleMenu}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          </label>
       
   
    </nav>
  )
}

export default Header