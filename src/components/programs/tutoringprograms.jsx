import "../../styling/programs/tutoringprograms.css";
import "../../styling/button.css";
import TutoringProgram from "./tutoringprogram";
import { Link } from "react-router-dom";

function TutoringPrograms() {
  return (
    <div id="tutoringprograms">
      <h1 id="tutoringprograms-title">
        Infokidz offers Mathematics and English Language Arts tutoring
      </h1>
      <div className="tutoringprograms-container">
        <TutoringProgram />
        <TutoringProgram />
      </div>
      <Link to="/register" className="free-session" id="button">
        Try Out a FREE Session
      </Link>
    </div>
  );
}

export default TutoringPrograms;
