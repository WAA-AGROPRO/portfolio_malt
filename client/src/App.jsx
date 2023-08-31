
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Offres from "./pages/Offres/Offres" 
import ContactForm from "./pages/Contact/Contact"
import Cgv from "./pages/CGV/Cgv"
import PolitqueConfident from "./pages/PC/PolitqueConfident"
import Informations from "./pages/Informations/Informations"
import Projets from "./pages/Projets/Projets"
import Article_1 from "./pages/Blog/Article_1"
import Article_2 from "./pages/Blog/Article_2"

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
          <Route path="/informations" element={<Informations />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/article/1" element={<Article_1 />} />
          <Route path="/article/2" element={<Article_2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
