import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import CompellingReview from "../testimonials/compellingreview";
import Reviews from "../testimonials/reviews";

function Testimonials() {
  return (
    <>
      <NavBar />
      <CompellingReview />
      <Reviews />
      <Footer />
    </>
  );
}

export default Testimonials;
