import "../../styling/programs/tutoringprograms.css";
import "../../styling/button.css";
import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const TutoringProgram = React.lazy(() => import("./tutoringprogram"));

function TutoringPrograms() {
  return (
    <div id="tutoringprograms">
      <h1 id="tutoringprograms-title">
        Infokidz offers Mathematics and English Language Arts tutoring
      </h1>
      <div className="tutoringprograms-container">
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
          <TutoringProgram
            title="Math"
            description="Our tutors can cover any topic that students 
            find difficult or want to learn more about, from topics 
            like addition to calculus. By encouraging students to 
            solve problems on their own and discover the underlying 
            concepts, our tutors allow students to not just know how 
            to solve problems, but more importantly understand the 
            language of mathematics."
            className="tutoringprogram"
          />
        </Suspense>
        <Suspense
          fallback={
            <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
          }
        >
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
        </Suspense>
      </div>
      <Link to="/register" className="tutoringprograms-button button">
        Try Out a FREE Session
      </Link>
    </div>
  );
}

export default TutoringPrograms;
