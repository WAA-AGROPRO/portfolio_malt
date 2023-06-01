
import "./Hero.scss";
import ArrowDown from "../../components/ArrowDown/ArrowDown";
import AlainThreeD from "../../components/AlainThreeD/AlainThreeD";

function Hero() {
  return (
        <div className="hero">
          <div className="hero__logo">
            <AlainThreeD />
          </div>
          <h1 className="hero__legend">Développeur Mobile et Web Fullstack</h1>
          <ArrowDown />
          </div>

  );
}

export default Hero;