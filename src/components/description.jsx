import "../styling/description.css";
import "../styling/button.css";
import { Link } from "react-router-dom";

function Description() {
  return (
    <div id="description">
      <h1 id="description-title">Tutoring that's</h1>
      <div id="description-subtitles">
        <h2 className="description-subtitle">Affordable</h2>
        <h2 className="description-subtitle">Personalized</h2>
        <h2 className="description-subtitle">Small-grouped</h2>
      </div>
      <div id="description-description">
        Infokidz Academy is a tutoring institute that helps students succeed
        academically. Our skilled tutors adapt their learning strategies and
        content to fit each student’s requirements.
      </div>
      <Link to="about-us" className="learn-more" id="button">
        Learn More
      </Link>
    </div>
  );
}

export default Description;
