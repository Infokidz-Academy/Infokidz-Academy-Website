import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const Description = React.lazy(() => import("../home/description"));
const Hero = React.lazy(() => import("../home/hero"));
const ProgramsHome = React.lazy(() => import("../home/programshome"));
const TutoringApproach = React.lazy(() => import("../home/tutoringapproach"));

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Infokidz | Math, English, Coding & App Design Courses for Kids
        </title>
        <meta
          name="description"
          content="Build your kids’ academic future with Infokidz online tutoring. 
          Learn Coding, App Development, and Math & English Language Arts."
        />
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
        <Hero />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Description />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <ProgramsHome />
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
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default Home;
