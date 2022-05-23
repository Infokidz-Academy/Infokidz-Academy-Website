import "../../styling/about-us/aboutdescription.css";

function AboutDescription() {
  return (
    <div id="aboutdescription">
      <div id="aboutdescription-image-container">
        <img
          src={require("../../images/infokidz-building.jpg")}
          alt="Infokidz Academy tutoring building"
          id="aboutdescription-image"
        />
      </div>
      <div id="aboutdescription-text">
        <h1 id="aboutdescription-title">About Infokidz</h1>
        <h2 id="aboutdescription-description">
          Infokidz Academy was founded in 2016 with the aim to provide students
          direct, effective, and thorough tutoring in the Edmonton area,
          focusing on mathematics and english language arts. <br /> <br />
          Recently, it has transformed into an online tutoring institute for
          students across Canada! The academy’s highly skilled tutors work with
          students using various personalized styles.
        </h2>
      </div>
    </div>
  );
}

export default AboutDescription;
