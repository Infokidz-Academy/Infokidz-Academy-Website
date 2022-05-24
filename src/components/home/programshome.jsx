import "../../styling/home/programshome.css";
import "../../styling/button.css";
import { Link } from "react-router-dom";

function ProgramsHome() {
  return (
    <div id="programshome">
      <h1 id="programshome-title">Programs</h1>
      <div id="programshome-wrapper">
        <div className="programshome-program" id="programshome-math">
          <h2 className="programshome-program-title">Math</h2>
          <p className="programshome-program-description">
            Our tutors are prepared to teach students various levels of
            mathematics, whether it be simple principles like addition or
            advanced ones like calculus.
          </p>
        </div>
        <hr
          id="middle-line"
          style={{
            width: "80%",
            borderColor: "var(--clr-secondary-light)",
            backgroundColor: "var(--clr-secondary-light)",
            borderRadius: "var(--br-button)",
          }}
        />
        <div className="programshome-program" id="programshome-ela">
          <h2 className="programshome-program-title">English Language Arts</h2>
          <p className="programshome-program-description">
            Our curriculum is designed to teach students the fundamental
            elements of English language arts, including reading comprehension,
            writing, grammar, and speaking.
          </p>
        </div>
      </div>
      <Link to="programs" className="programshome-learn-more" id="button">
        Learn More
      </Link>
    </div>
  );
}

export default ProgramsHome;
