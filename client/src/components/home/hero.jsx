import "../../styling/home/hero.css";
import "../../styling/button.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div id="hero">
      <div id="hero-text">
        <h1 id="hero-title"> Unlock Your Child's Academic Potential</h1>
        <h2 id="hero-description">Online Math and English Tutoring</h2>
        <Link to="/register" className="get-started button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;
