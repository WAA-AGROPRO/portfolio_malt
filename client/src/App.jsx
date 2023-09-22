
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
          <Route path="/article/decouvrez_comment_un_site_web_responsive_peut_transformer_votre_expérience_en_ligne" element={<Article_1 />} />
          <Route path="/article/le_secret_pour_creer_une_application_B2B_qui_explose_vos_profits" element={<Article_2 />} />
          <Route path="/article/les_7_etapes_cruciales_pour_un_referencement_SEO_parfait" element={<Article_3 />} />
          <Route path="/article/une_app_iOS_et_android_entre_3_et_15_k€_comment_est_ce_possible" element={<Article_4 />} />
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
