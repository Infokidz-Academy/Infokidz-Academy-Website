import "../../styling/faq/questions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Question(props) {
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        className="accordion-header"
      >
        <Typography className="accordion-title">{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="accordion-description">
          {props.children}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Question;
