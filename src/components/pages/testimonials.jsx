import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import CompellingReview from "../testimonials/compellingreview";
import Reviews from "../testimonials/reviews";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Testimonials() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/testimonials" />
      </Helmet>
      <NavBar />
      <CompellingReview />
      <Reviews />
      <Footer />
    </HelmetProvider>
  );
}

export default Testimonials;
