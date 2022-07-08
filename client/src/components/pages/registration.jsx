import React from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));
const RegistrationForm = React.lazy(() =>
  import("../registration/registrationform")
);

function Registration() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Register for a FREE try-out session</title>
        <meta
          name="description"
          content="Register for Math and English lessons for 
          long-term support or last-minute help at Infokidz academy for grades 3-12"
        />
        <link rel="canonical" href="/register" />
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
        {" "}
        <RegistrationForm />
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

export default Registration;
