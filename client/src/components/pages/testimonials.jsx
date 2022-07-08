import React from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const CompellingReview = React.lazy(() =>
  import("../testimonials/compellingreview")
);
const Reviews = React.lazy(() => import("../testimonials/reviews"));

function Testimonials() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Affordable Online Tutoring | Infokidz</title>
        <meta
          name="description"
          content="Want to hear what parents are saying about us?"
        />
        <link rel="canonical" href="/testimonials" />
      </Helmet>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <CompellingReview />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Reviews />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default Testimonials;
