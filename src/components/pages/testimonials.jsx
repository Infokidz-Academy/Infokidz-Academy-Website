import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import CompellingReview from "../testimonials/compellingreview";
import Reviews from "../testimonials/reviews";
import { Helmet } from "react-helmet";

function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/testimonials" />
      </Helmet>
      <NavBar />
      <CompellingReview />
      <Reviews />
      <Footer />
    </>
  );
}

export default Testimonials;
