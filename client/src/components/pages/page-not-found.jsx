import "../../styling/pages/page-not-found.css";
import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function PageNotFound() {
  return (
    <>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
      </Suspense>
      <div id="pagenotfound">
        <h1 id="pagenotfound-text">404: Sorry, Page Not Found</h1>
      </div>
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

export default PageNotFound;
