import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
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
            <Grid container spacing={1} justifyContent="center">
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
                  className="textField"
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
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type="email"
                  label="Parent's/Guardian's Email"
                  name="parentEmail"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 50 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type="number"
                  label="Parent's/Guardian's Phone Number"
                  name="parentNumber"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type="number"
                  label="Student's Grade"
                  name="grade"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 }, maxLength: 50 }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  label="Student's Current School Name"
                  name="school"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  type="email"
                  label="Student's Gmail"
                  name="studentGmail"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className="textField">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Subject(s)
                  </FormLabel>
                  <RadioGroup
                    name="subject"
                    variant="outlined"
                    fullWidth
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Math"
                  >
                    <FormControlLabel
                      value="Math"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>Math</Typography>
                      }
                    />
                    <FormControlLabel
                      value="English"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>English</Typography>
                      }
                    />
                    <FormControlLabel
                      value="Both"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>Both</Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl className="textField">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Why do you need/want tutoring?
                  </FormLabel>
                  <RadioGroup
                    name="reason"
                    variant="outlined"
                    fullWidth
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="To improve academic performance"
                  >
                    <FormControlLabel
                      value="To improve academic performance"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          To improve academic performance
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="School or teacher advised"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          School or teacher advised
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Struggling in current grade"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          Struggling in current grade
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="To improve competitive grades"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          To improve competitive grades
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Tutoring Requirements "
                  name="requirements"
                  placeholder="Please be as detailed as possible and include details about a subject, topic/module, help needed in a particular oncoming exam, etc."
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={5}
                  inputProps={{
                    style: { fontSize: 24 },
                    maxLength: 1200,
                  }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                  className="textField"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Starting Session
                  </FormLabel>
                  <RadioGroup
                    name="tryOutSession"
                    variant="outlined"
                    fullWidth
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Regular Start"
                  >
                    <FormControlLabel
                      value="Regular Start"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          Regular Start
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Free Try-out Session"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          FREE Try-out Session
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Tutoring Style
                  </FormLabel>
                  <RadioGroup
                    name="tutoringStyle"
                    variant="outlined"
                    fullWidth
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="One-On-One (Customized learning)"
                  >
                    <FormControlLabel
                      value="One-On-One (Customized learning)"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          One-On-One (Customized learning)
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value="Small Group Tutoring (Individual attention, maximum 3 students per teacher)"
                      control={<Radio />}
                      label={
                        <Typography sx={{ fontSize: 24 }}>
                          Small Group Tutoring (Individual attention, maximum 3
                          students per teacher)
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
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
