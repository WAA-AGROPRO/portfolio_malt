
import "./Projects.scss"
import CardProject from '../../components/Card/Card'
import Agropro from '../../assets/agropro.png'
import Kanap from '../../assets/kanap.png'
import Ohmyfood from '../../assets/Ohmyfood.png'
import Chouette from '../../assets/chouette.png'
import Mesbonaf from '../../assets/mesbonaf.png'
import Kevin from '../../assets/kevin.png'

function Projects() {
  return (
    <div className="projects">
        <h1 className='projects__title'>Projets</h1>
        <div className="projects__content">
       
            <CardProject
            img={Agropro}
            title="Agropro Annonce"
            subtitle="Site Web"
        />
        <CardProject
            img={Kanap}
            title="Kanap"
            subtitle="Site Web"
           />
         
         <CardProject
         img={Ohmyfood}
         title="Ohmyfood"
         subtitle="Site Web"
         />
         <CardProject
         img={Chouette}
         title="La Chouette Agence"
         subtitle="Site Web"
         />
         <CardProject
         img={Mesbonaf}
         title="Mes BONAF"
         subtitle="Application mobile"
         />
          <CardProject
         img={Kevin}
         title="Kévin R."
         subtitle="Site Web"
         />
        </div>
    </div>
  )
}

export default Projects