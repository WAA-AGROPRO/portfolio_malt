
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
import Article_3 from "./pages/Blog/Article_3"
import Article_4 from "./pages/Blog/Article_4"
import ExpertiseWeb from "./pages/ExpertisesPage/ExpertiseWeb"
import ExpertiseMobile from "./pages/ExpertisesPage/ExpertiseMobile"
import ExpertiseSEO from "./pages/ExpertisesPage/ExpertiseSEO"
import ComingSoon from "./pages/ComingSoon/ComingSoon"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/article/3" element={<Article_3 />} />
          <Route path="/article/4" element={<Article_4 />} />
          <Route path="/expertise/web" element={<ExpertiseWeb />} />
          <Route path="/expertise/mobile" element={<ExpertiseMobile />} />
          <Route path="/expertise/seo" element={<ExpertiseSEO />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
