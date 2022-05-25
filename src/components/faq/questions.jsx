import "../../styling/faq/questions.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

function Questions() {
  return (
    <div id="faq-container">
      <div id="faq-title">Frequently Asked Questions</div>
      <div id="accordion-container">
        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              How do I sign-up for Infokidz Tutoring?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Register on our{" "}
              <Link to="/register" className="links">
                {" "}
                website
              </Link>
              . Infokidz will contact you for further details and availability
              of the start date.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              How does it work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              <Link to="/how-infokidz-works" className="links">
                How it Works
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do you provide any FREE try-out sessions?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Yes, please fill out the{" "}
              <Link to="/register" className="links">
                registration form
              </Link>{" "}
              and select a FREE try-out session for the preferred subject. We
              provide one free try-out class for each subject so that students
              and parents can experience the teaching process before committing.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              How do I sign up for regular classes after the free try-out class?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Please call{" "}
              <a href="tel:780-966-7700" className="links">
                +1 780-966-7700
              </a>{" "}
              or fill out the{" "}
              <Link to="/contact" className="links">
                contact
              </Link>{" "}
              form to let us know your preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              What subjects do you offer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Infokidz currently teaches Mathematics and English Language Arts
              for Grades 3 to 12. Learn more about it{" "}
              <Link to="/programs" className="links">
                here
              </Link>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do you follow school curriculum?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Yes, Infokidz follows Canadian school curriculum. Tutors also help
              students with the current topics being taught at their school.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Where are the tutoring sessions held?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Online tutoring occurs through{" "}
              <a href="https://meet.google.com/" className="links">
                Google meet
              </a>
              .
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Does Infokidz provide homework or assignments for practice?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Infokidz provides homework for Math. For ELA, parents/students
              should ask their tutor.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Is there a drop-in class?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              No, we do not provide drop-in classes.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do we have to sign-up for both Math and ELA subjects for tutoring?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              No, you can choose either of the subjects for tutoring.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Who are the tutors?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Most of our tutors are current students at university either
              pursuing their undergraduate, Master's, or PhD studies. They are
              enthusiastic and passionate about working with students, and love
              to create a fun, engaging classroom environment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              How much does tutoring cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Our tutoring program includes 6 hours of Math and 6 hours of
              English LA tutoring per month. This is a total of 12 hours of
              tutoring for $120 per month. If you would like to opt for one
              subject, our fee is $75 per month, which consists of 6 hours (1.5
              hours every week) of tutoring per month.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              How are payments made for tutoring?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Payments can be made by filling out the{" "}
              <Link to="/direct-deposit" className="links">
                direct deposit form
              </Link>{" "}
              or by e-transfer.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do I need to sign a contract for tutoring?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              There is no contract to sign, but a minimum two-month subscription
              is required for new registrations and a 30 days notice to cancel
              the service.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Will I get the same tutor every time?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Yes. In temporary instances where this is not feasible, we assign
              alternate tutors.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              What if a tutoring option is not listed on your website?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Please call{" "}
              <a href="tel:780-966-7700" className="links">
                +1 780-966-7700
              </a>{" "}
              or fill out the{" "}
              <Link to="/contact" className="links">
                contact
              </Link>{" "}
              form to let us know your preference and someone will contact you
              to discuss your specific requirements.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do you provide alternate classes if students miss one?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              We try to provide an alternate class but this is not always
              possible.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Do you provide an assessment?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Yes, at the start of each school year and when new students
              register, we complete an assessment.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="accordion-header"
          >
            <Typography className="accordion-title">
              Who do I contact, if I have a question or concern?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="accordion-description">
              Please call{" "}
              <a href="tel:780-966-7700" className="links">
                +1 780-966-7700
              </a>{" "}
              or fill out the{" "}
              <Link to="/contact" className="links">
                contact
              </Link>{" "}
              form.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Questions;
