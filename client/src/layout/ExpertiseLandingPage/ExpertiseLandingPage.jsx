import "./ExpertiseLandingPage.scss";
import AnimationLandingPage from "../../components/Animation/AnimationLandingPage";
import { Link } from "react-router-dom";
function ExpertiseLandingPage(props) {

    
  return (
    <section className="hero">
          <div className="hero-copy">
            <h1 className="hero__title">{props.title}</h1>
            <p className="hero__paragraph">{props.paragraph}</p>
            <div className="hero-cta">
              <Link className="hero__btn" to="/contact">Contactez-nous</Link>
            </div>
          </div>
          <AnimationLandingPage />

    </section>
  );
}

export default ExpertiseLandingPage;
