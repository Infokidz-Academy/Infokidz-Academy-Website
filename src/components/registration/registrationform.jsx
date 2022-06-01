import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import "../../styling/registration/registrationform.css";
import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

function RegistrationForm() {
  return (
    <div id="registrationform">
      <h2 id="registrationform-title">
        Ready to launch your child’s new academic journey?
      </h2>

      {/*Form*/}
      <Card>
        <CardContent>
          <Typography id="registrationform-title2">
            Infokidz Academy Registration Form
          </Typography>
          <form>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Student's Full Name"
                  name="studentName"
                  variant="outlined"
                  size="normal"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 30 }} // font size of input text and max-length of input
                  InputLabelProps={{ style: { fontSize: 24 } }} // font size of input label
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Parent's/Guardian's Full Name"
                  name="parentName"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 30 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="email"
                  label="Parent's/Guardian's Email"
                  name="parentEmail"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 50 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="number"
                  label="Parent's/Guardian's Phone Number"
                  name="parentNumber"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="number"
                  label="Student's Grade"
                  name="grade"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 50 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Student's Current School Name"
                  name="school"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  type="email"
                  label="Student's Email"
                  name="studentEmail"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  label="Subject(s)"
                  name="subject"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Math"
                >
                  <FormControlLabel
                    value="Math"
                    control={<Radio />}
                    label={"Math"}
                  />
                  <FormControlLabel
                    value="English"
                    control={<Radio />}
                    label="English"
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio />}
                    label="Both"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  label="Why do you need/want tutoring?"
                  name="reason"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 120 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="To improve academic performance"
                >
                  <FormControlLabel
                    value="To improve academic performance"
                    control={<Radio />}
                    label="To improve academic performance"
                  />
                  <FormControlLabel
                    value="School or teacher advised"
                    control={<Radio />}
                    label="School or teacher advised"
                  />
                  <FormControlLabel
                    value="Struggling in current grade"
                    control={<Radio />}
                    label="Struggling in current grade"
                  />
                  <FormControlLabel
                    value="To improve competitive grades"
                    control={<Radio />}
                    label="To improve competitive grades"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Tutoring Requirements (Please be as detailed as possible and include details about a subject, topic/module, help needed in a particular oncoming exam, etc.)"
                  name="requirements"
                  placeholder="Please type your message here"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  inputProps={{ style: { fontSize: 24 }, maxLength: 1200 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  label="Try-out Session"
                  name="tryOutSession"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 120 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="Regular Start"
                >
                  <FormControlLabel
                    value="Regular Start"
                    control={<Radio />}
                    label="Regular Start"
                  />
                  <FormControlLabel
                    value="Free Try-out Session"
                    control={<Radio />}
                    label="Free Try-out Session"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  label="Tutoring Preference"
                  name="tutoringPreference"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 120 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="One-On-One (Customized learning)"
                >
                  <FormControlLabel
                    value="One-On-One (Customized learning)"
                    control={<Radio />}
                    label="One-On-One (Customized learning)"
                  />
                  <FormControlLabel
                    value="Small Group Tutoring (Individual attention, maximum 3 students per teacher)"
                    control={<Radio />}
                    label="Small Group Tutoring (Individual attention, maximum 3 students per teacher)"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={6} sm={3} md={2}>
                <Button
                  type="submit"
                  variant="contained"
                  id="registrationform-submit"
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
  );
}

export default RegistrationForm;
