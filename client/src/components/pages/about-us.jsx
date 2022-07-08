import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const AboutDescription = React.lazy(() =>
  import("../about-us/aboutdescription")
);
const AboutValueProposition = React.lazy(() =>
  import("../about-us/aboutvalueproposition")
);
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function AboutUs() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Canadian After school Learning Resources</title>
        <meta
          name="description"
          content="Infokidz Academy is a Canadian after-school 
        educational institute for Math and English tutoring."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
        <AboutValueProposition />
        <AboutDescription />
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default AboutUs;
