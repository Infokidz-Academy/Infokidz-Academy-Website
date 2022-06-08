import "../../styling/how-infokidz-works/tutoringservices.css";
import "../../styling/button.css";
import { Link } from "react-router-dom";

function TutoringServices() {
  return (
    <div id="tutoringservices">
      <h1 id="tutoringservices-title">Tutoring Services</h1>
      <div id="tutoringservices-image-container">
        <img
          src={require("../../images/-")}
          alt="Tutoring services One-On-One and Small Group tutoring"
          id="tutoringservices-image"
        />
      </div>
      <div id="tutoringservices-container">
        <div className="tutoringservices-service">
          <h1 className="tutoringservices-service-title">One-on-One</h1>
          <p className="tutoringservices-service-description">
            Infokidz offers affordable one-on-one tutoring: a student is paired
            with a tutor for each session. Tutoring is fully personalized to
            allow students to learn in a way that maximizes their understanding
            and growth.
          </p>
        </div>
        <div className="tutoringservices-service">
          <h1 className="tutoringservices-service-title">Small Group</h1>
          <p className="tutoringservices-service-description">
            Small group tutoring takes place in groups of three or less students
            per teacher. Students are still tutored based on their personal
            academic requirements and goals.
          </p>
        </div>
        <Link to="/register" className="tutoringservices-button" id="button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default TutoringServices;
