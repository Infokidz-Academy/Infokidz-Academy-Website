import React, { Suspense } from "react";
import "../../App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CircularProgress } from "@mui/material";
const ContactForm = React.lazy(() => import("../contact/contactform"));
const Footer = React.lazy(() => import("../footer"));
const NavBar = React.lazy(() => import("../navbar"));

function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Find a Tutor</title>
        <meta
          name="description"
          content="Call us, text us, or submit a contact form for any 
          questions or tutoring inquiries."
        />
        <link rel="canonical" href="/contact" />
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
        <ContactForm />
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

export default Contact;
