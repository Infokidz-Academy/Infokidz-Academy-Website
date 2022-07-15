import React, { Suspense, useState } from "react";
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
  /*States for form selection options*/
  const [subject, setSubject] = useState("Math");
  const [sort, setSort] = useState("Grade");

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
        <WorksheetsSelection
          subject={subject}
          setSubject={setSubject}
          sort={sort}
          setSort={setSort}
        />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Worksheets subject={subject} sort={sort} />
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
