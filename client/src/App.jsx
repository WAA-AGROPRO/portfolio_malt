import {useState, useEffect } from "react"
import Expertise from "./layout/Expertise/Expertise"
import Footer from "./layout/Footer/Footer"
import Hero from "./layout/Hero/Hero"
import Loader from "./components/Loader/Loader"
import Projects from "./layout/Projects/Projects"


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return loading ? (
    <Loader /> ) : (
    <>
      <div className="app">  
        
        <Hero />
        <Expertise />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
