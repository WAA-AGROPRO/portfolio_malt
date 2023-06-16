
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Offres from "./pages/Offres/Offres" 
import Contact from "./pages/Contact/Contact"


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
