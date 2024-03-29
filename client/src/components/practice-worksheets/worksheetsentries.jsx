import "../../styling/faq/questions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorksheetsEntry from "./worksheetsentry";

function WorksheetsEntries(props) {
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        className="accordion-header"
      >
        <Typography component={"span"} className="accordion-title">
          {props.heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={"span"} className="accordion-description">
          {props.worksheetSet.map((worksheet) => {
            return (
              <WorksheetsEntry
                worksheet={worksheet}
                description={props.description}
                isAdmin={props.isAdmin}
                key={worksheet.name}
              />
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorksheetsEntries;
