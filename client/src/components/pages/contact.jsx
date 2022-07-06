import React from "react";
import "../../App.css";
import ContactForm from "../contact/contactform";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      <NavBar />
      <ContactForm />
      <Footer />
    </HelmetProvider>
  );
}

export default Contact;
