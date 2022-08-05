import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "../../styling/contact/contactform.css";
import { useState } from "react";
import axios from "axios";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormDialog from "../formdialog";

function ContactForm() {
  /*States for the form fields*/
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  /*Honeypot*/
  const [name, setName] = useState(false);

  /*Dialog*/
  const [open, setOpen] = useState(false);

  // Obtain sheetbest contact link
  var SHEETBEST_CONTACT_LINK;

  axios.get("http://localhost:5000/form/sheetbest/contact").then((response) => {
    SHEETBEST_CONTACT_LINK = response.data;
  });

  /*Send data to spreadsheet*/
  const onSubmit = () => {
    axios.post(SHEETBEST_CONTACT_LINK, {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    });

    setOpen(true);
  };

  // Obtain EmailJs form data
  var EmailJS_SERVICE_ID;
  var EmailJS_PUBLIC_KEY;

  axios.get("http://localhost:5000/form/forminfo").then((response) => {
    EmailJS_SERVICE_ID = response.data.SERVICE_ID;
    EmailJS_PUBLIC_KEY = response.data.PUBLIC_KEY;
  });

  // Obtain EmailJS registration template ID
  var EmailJS_CONTACT_TEMPLATE_ID;

  axios.get("http://localhost:5000/form/emailjs/contact").then((response) => {
    EmailJS_CONTACT_TEMPLATE_ID = response.data;
  });

  /*Send data to email*/
  const form = useRef();
  const sendEmail = (e) => {
    if (!name) {
      e.preventDefault();

      emailjs
        .sendForm(
          EmailJS_SERVICE_ID,
          EmailJS_CONTACT_TEMPLATE_ID,
          form.current,
          EmailJS_PUBLIC_KEY
        )
        .then((result) => {
          e.target.reset();
        });
      onSubmit();
    }
  };

  return (
    <>
      {open && (
        <FormDialog
          open={open}
          closeDialog={setOpen}
          title="Thank you for Contacting Infokidz!"
          description="We'll be in touch with you shortly"
        />
      )}
      <div id="contactform">
        <h2 id="contactform-title">We'd love to answer your questions!</h2>

        {/*Form*/}
        <Card>
          <CardContent>
            <Typography id="contactform-title2">
              {" "}
              Contact us through a{" "}
              <a href="tel:780-966-7700" id="contactform-link">
                phone call
              </a>{" "}
              or by filling out this form:
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                label="name"
                variant="outlined"
                size="normal"
                fullWidth
                style={{
                  display: "none",
                  visibility: "hidden",
                }}
                name="name"
                onChange={() => setName(true)}
              />
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    size="normal"
                    fullWidth
                    required
                    inputProps={{ style: { fontSize: 24 }, maxLength: 30 }} // font size of input text and max-length of input
                    InputLabelProps={{ style: { fontSize: 24 } }} // font size of input label
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ style: { fontSize: 24 }, maxLength: 30 }}
                    InputLabelProps={{ style: { fontSize: 24 } }}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ style: { fontSize: 24 }, maxLength: 50 }}
                    InputLabelProps={{ style: { fontSize: 24 } }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="number"
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    inputProps={{ style: { fontSize: 24 } }}
                    InputLabelProps={{ style: { fontSize: 24 } }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ style: { fontSize: 24 }, maxLength: 120 }}
                    InputLabelProps={{ style: { fontSize: 24 } }}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    placeholder="Please type your message here"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    inputProps={{ style: { fontSize: 24 }, maxLength: 1200 }}
                    InputLabelProps={{ style: { fontSize: 24 } }}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    id="contactform-submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default ContactForm;
