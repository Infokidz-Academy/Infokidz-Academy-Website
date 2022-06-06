import "../../styling/programs/tutoringprogram.css";
import * as React from "react";

function TutoringProgram(props) {
  return (
    <div id="tutoringprogram">
      <h1 id="tutoringprogram-title">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default TutoringProgram;
