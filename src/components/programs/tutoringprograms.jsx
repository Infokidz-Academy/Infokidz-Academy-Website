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
        <TutoringProgram
          title="Math"
          description="Our tutors can cover any topic that students 
            find difficult or want to learn more about, from topics 
            like addition to calculus. By encourgaing students to 
            solve problems on their own and discover the underlying 
            concepts, our tutors allow students to not just know how 
            to solve problems, but more importantly understand the 
            language of mathematics."
          className="tutoringprogram"
        />
        <TutoringProgram
          title="English Language Arts"
          description="Students can request any specific topics 
            that they struggle with at school or focus on developing 
            essential language arts skills, with our ELA curriculum 
            ranging from reading and writing to grammar, speaking, 
            listening, and literary analysis. Infokidz Tutors apply 
            various teaching techniques to allow students to build 
            expertise in language arts."
          className="tutoringprogram"
        />
      </div>
      <Link to="/register" className="tutoringprograms-button" id="button">
        Try Out a FREE Session
      </Link>
    </div>
  );
}

export default TutoringPrograms;
