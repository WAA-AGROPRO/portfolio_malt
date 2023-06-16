import AlainThreeD from "../../components/AlainThreeD/AlainThreeD"
import "./About.scss"


function About() {
  return (
    <div className="about">
        <h1 className="about__title">Connaissez-vous WAA ?</h1>
        <main className="about__container">
        <section className="about__section">
            <h2 className="about__section__title">
                Une entreprise atypique...
            </h2>
            <p className="about__section__legend">
                Petite start-up dans le monde digitale.
                < br />
                <span className="waa-spec">
                     WAA
                </span>
                {" "} est une entreprise qui a pour but de vous aider à développer votre projet. 
                </p>
            <p className="about__section__legend">
                Solide expérience dans le développement web, nous vous proposons des solutions adaptées à vos besoins.
            </p>
            <p className="about__section__legend">
                Nous vous proposons aussi des solutions pour vos projets mobile.
            </p>

        </section>
        <section className="about__section">
            <AlainThreeD />
        </section>
            
        </main>
    </div>
  )
}

export default About