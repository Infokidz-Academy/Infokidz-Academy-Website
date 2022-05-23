import "../../styling/about-us/aboutvalueproposition.css";

function AboutValueProposition() {
  return (
    <div id="aboutvalueproposition">
      <h1 id="aboutvalueproposition-text">
        Where kids learn, excel, and takeoff
      </h1>
      <img
        id="aboutvalueproposition-image"
        src={require("../../images/about-value-proposition.jpg")}
        alt="Student studying online math and english language arts"
      />
    </div>
  );
}

export default AboutValueProposition;
