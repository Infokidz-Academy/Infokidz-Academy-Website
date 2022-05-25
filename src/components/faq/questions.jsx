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
      </div>
    </div>
  );
}

export default Questions;
