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
                <TextField />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField />
              </Grid>
              <Grid item xs={12}>
                <TextField />
              </Grid>
              <Grid item xs={12}>
                <TextField />
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
