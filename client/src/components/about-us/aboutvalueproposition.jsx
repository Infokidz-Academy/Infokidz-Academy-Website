import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../styling/about-us/aboutvalueproposition.css";

function AboutValueProposition() {
  return (
    <div id="aboutvalueproposition">
      <div id="aboutvalueproposition-text-container">
        <h1 id="aboutvalueproposition-text">
          Where kids learn, excel, and takeoff
        </h1>
      </div>
      <div id="aboutvalueproposition-image-container">
        <LazyLoadImage
          id="aboutvalueproposition-image"
          src={require("../../images/about-value-proposition.jpg")}
          alt="Student studying online math and english language arts"
        />
      </div>
    </div>
  );
}

export default AboutValueProposition;
