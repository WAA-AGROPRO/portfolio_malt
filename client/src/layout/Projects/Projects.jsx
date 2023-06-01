
import "./Projects.scss"
import CardProject from '../../components/Card/Card'
import Agropro from '../../assets/agropro.png'
import Booki from '../../assets/Booki.png'
import Ohmyfood from '../../assets/ohmyfood.png'
import Chouette from '../../assets/chouette.png'
import Kanap from '../../assets/kanap.png'
import Groupomania from '../../assets/groupomania.png'



import ReactLogo from '../../assets/react.svg'
import PrestashopLogo from '../../assets/prestashop.svg'
import MysqlLogo from '../../assets/mysql.svg'
import Html from '../../assets/html.svg'
import Sass from '../../assets/sass.svg'
import Js from '../../assets/javascript.svg'
import Css from '../../assets/css.svg'
import Node from '../../assets/nodejs.svg'



function Projects() {
  return (
    <div className="projects">
        <h1 className='title'>Projets</h1>
        <div className="projects__content">
       
            <CardProject
            link="https://agroproannonce.shop/fr/"
            img={Agropro}
            title="Agropro Annonce"
            logo1={MysqlLogo}
            logo2={PrestashopLogo}
        />
        <CardProject
            link="https://github.com/Gasyh3/RakotoniainaKevin_5_01022022"
            img={Kanap}
            title="Kanap"
            logo1={Html}
            logo2={Js} 
           />
          <CardProject
          link="https://github.com/Gasyh3/https://github.com/Gasyh3/groupomania_code_rakotoniaina_kevin"
          img={Groupomania}
          title="Groupomania"
          logo1={ReactLogo}
          logo2={Node}
         />




        </div>
    </div>
  )
}

export default Projects