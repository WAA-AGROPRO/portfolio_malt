import About from "./layout/About/About"
import Expertise from "./layout/Expertise/Expertise"
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import Hero from "./layout/Hero/Hero"

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Expertise />
        <About />
        <Footer />
      </div>
    </>
  )
}

export default App
