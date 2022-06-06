import "../../styling/home/tutoringapproach.css";
import "../../styling/button.css";
import { Link } from "react-router-dom";

function TutoringApproach() {
  return (
    <div id="tutoringapproach">
      <h1 id="tutoringapproach-title">Tutoring Approach</h1>
      <div id="tutoringapproach-wrapper">
        <div
          className="tutoringapproach-step"
          id="tutoringapproach-registration"
        >
          <h2 className="tutoringapproach-step-title">1. Registration</h2>
          <p className="tutoringapproach-step-description">
            First, parents register their student(s) and select preferences for
            tutoring, such as the desired subjects, type of learning, and
            tutoring period.{" "}
          </p>
        </div>
        <div
          className="tutoringapproach-step"
          id="tutoringapproach-personalization"
        >
          <h2 className="tutoringapproach-step-title">2. Personalization</h2>
          <p className="tutoringapproach-step-description">
            The parent, tutor, and student will have a brief discussion to
            prepare a personalized learning approach. The student will then take
            an assessment exam to determine their current academic level and
            areas for improvement.
          </p>
        </div>
        <div className="tutoringapproach-step" id="tutoringapproach-tutoring">
          <h2 className="tutoringapproach-step-title">3. Tutoring Begins!</h2>
        </div>
      </div>
      <Link to="/register" className="free-session" id="button">
        Try Out a FREE Session
      </Link>
    </div>
  );
}

export default TutoringApproach;
