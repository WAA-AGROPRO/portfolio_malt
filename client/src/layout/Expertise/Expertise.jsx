
import './Expertise.scss'
import ExpertiseSection from '../../components/ExpertiseSection/ExpertiseSection'

function Expertise() {
  return (
    <div className="expertise">
        <h1 className="title">Expertise</h1>
        <p className="expertise__description"></p>
        <main className="expertise__content">
            <ExpertiseSection 
              img="https://images.unsplash.com/photo-1590965918603-0dce981d13b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80" 
              alt="Image by Ales Nesetril" 
              title="Création de site Web"
              link="web"
              description="Nous concevons, développons, optimisons et assurons la maintenance de site Web."/>
            <ExpertiseSection 
              img="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
              alt="Image by Neil Soni" 
              title="Création d'application Mobile"
              link="mobile"
              description="Nous concevons, développons, optimisons et assurons la maintenance d'applications mobiles personnalisées pour Android et iOS." />
            <ExpertiseSection 
              img="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Image by Myriam Jesser" 
              title="Référencement SEO"
              link="seo"
              description="Nous proposons un service d'optimisation du référencement naturel de votre projet." />
        </main>
    </div>
  )
}

export default Expertise