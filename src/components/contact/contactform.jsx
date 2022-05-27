import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "../../styling/contact/contactform.css";

function ContactForm() {
  return (
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
          <form>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  size="normal"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }} // font size of input text
                  InputLabelProps={{ style: { fontSize: 24 } }} // font size of input label
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="number"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  placeholder="Please type your message here"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  inputProps={{ style: { fontSize: 24 } }}
                  InputLabelProps={{ style: { fontSize: 24 } }}
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
  );
}

export default ContactForm;
