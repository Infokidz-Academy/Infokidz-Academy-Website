import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const TutoringApproach = React.lazy(() => import("../home/tutoringapproach"));
const TutoringServices = React.lazy(() =>
  import("../how-infokidz-works/tutoringservices")
);

function HowInfokidzWorks() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Canadian Online Tutoring Center</title>
        <meta
          name="description"
          content="Infokidz academy provides affordable, 
        personalized, and small-grouped educational services for grade three to 12."
        />
        <link rel="canonical" href="/how-infokidz-works" />
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
        <TutoringApproach />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <TutoringServices />
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

export default HowInfokidzWorks;
