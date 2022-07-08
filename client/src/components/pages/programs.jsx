import React from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const TutoringPrograms = React.lazy(() =>
  import("../programs/tutoringprograms")
);

function Programs() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reading, Writing, Math K-12 Tutor Near Me</title>
        <meta
          name="description"
          content="Infokidz offers math, english, coding, and app development. 
          Programs, aligned with the Canadian curriculum, are taught by the best tutors."
        />
        <link rel="canonical" href="/programs" />
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
        <TutoringPrograms />
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

export default Programs;
