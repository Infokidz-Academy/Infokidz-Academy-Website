import "../../styling/faq/questions.css";
import "../../styling/practice-worksheets/worksheetsentry.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function WorksheetsEntry(props) {
  return (
    <Accordion className="accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        className="accordion-header"
      >
        <Typography className="accordion-title">{props.heading}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="accordion-description">
          {props.worksheetSet.map((worksheet) => {
            return (
              <div>
                <a
                  href={
                    "http://localhost:8000/worksheets/" +
                    worksheet.name +
                    ".pdf"
                  }
                  id="worksheetsentry-link"
                >
                  {worksheet.name}
                </a>{" "}
                | {props.description}:{" "}
                {props.description === "Topic"
                  ? worksheet.topic
                  : worksheet.grade}
              </div>
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorksheetsEntry;
