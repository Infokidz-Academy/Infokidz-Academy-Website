import React, { Suspense, useState } from "react";
import "../../App.css";
import { CircularProgress } from "@mui/material";
const WorksheetsSelection = React.lazy(() =>
  import("../practice-worksheets/worksheetsselection")
);
const Worksheets = React.lazy(() =>
  import("../practice-worksheets/worksheets")
);
const WorksheetsForm = React.lazy(() =>
  import("../practice-worksheets/worksheetsform")
);
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function PracticeWorksheetsAdmin() {
  /*States for form selection options*/
  const [subject, setSubject] = useState("Math");
  const [sort, setSort] = useState("Grade");

  return (
    <>
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
        <WorksheetsForm />
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
        <Worksheets subject={subject} sort={sort} isAdmin={true} />
      </Suspense>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <Footer />
      </Suspense>
    </>
  );
}

export default PracticeWorksheetsAdmin;
