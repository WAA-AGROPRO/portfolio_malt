
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Offres from "./pages/Offres/Offres" 
import ContactForm from "./pages/Contact/Contact"
import Cgv from "./pages/CGV/Cgv"
import PolitqueConfident from "./pages/PC/PolitqueConfident"


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cgv" element={<Cgv />} />
          <Route path="/politique_confidentialite" element={<PolitqueConfident />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
