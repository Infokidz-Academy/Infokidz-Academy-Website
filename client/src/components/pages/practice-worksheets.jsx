import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const WorksheetsSelection = React.lazy(() =>
  import("../practice-worksheets/worksheetsselection")
);
const Worksheets = React.lazy(() =>
  import("../practice-worksheets/worksheets")
);
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function PracticeWorksheets() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Printable Math Worksheets | Infokidz</title>
        <meta
          name="description"
          content="Brush up your skills using Infokidz’s 
        free Math worksheets for algebra, exponents, fractions, trigonometry, geometry, 
        polynomials, calculus, and more."
        />
        <link rel="canonical" href="/practice-worksheets" />
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
        <WorksheetsSelection />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Worksheets />
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

export default PracticeWorksheets;