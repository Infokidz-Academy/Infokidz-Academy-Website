import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const Questions = React.lazy(() => import("../faq/questions"));
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function FAQ() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Looking to improve your child’s reading/writing skills 
          or searching for a free try-out session at Infokidz? See FAQ for more information."
        />
        <link rel="canonical" href="/faq" />
      </Helmet>
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
      >
        <NavBar />
        <Questions />
        <Footer />
      </Suspense>
    </HelmetProvider>
  );
}

export default FAQ;
