
import About from "../../layout/About/About"
import Expertise from "../../layout/Expertise/Expertise"
import Hero from "../../layout/Hero/Hero"
import Projects from "../../layout/Projects/Projects"
import Offres from "../Offres/Offres"


function Home() {
  return (
    <div>
        <Hero />
        <Expertise />
        <Offres />
        <About />
        <Projects />
    </div>
  )
}

export default Home