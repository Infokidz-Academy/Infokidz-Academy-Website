import React from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const PrivacyPolicy = React.lazy(() => import("../policies/privacypolicy"));

function Policies() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz Academy Canada</title>
        <link rel="canonical" href="/policies" />
      </Helmet>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
        <PrivacyPolicy />
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default Policies;
