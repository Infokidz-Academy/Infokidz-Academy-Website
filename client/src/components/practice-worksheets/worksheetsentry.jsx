import "../../styling/faq/questions.css";
import "../../styling/practice-worksheets/worksheetsentry.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

function WorksheetsEntry(props) {
  function handleDelete() {}
  function handleEdit() {}

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
                {props.isAdmin && (
                  <Button
                    onClick={handleDelete}
                    id="worksheetsentry-delete"
                    className="button"
                    variant="contained"
                  >
                    Delete
                  </Button>
                )}
                {props.isAdmin && (
                  <Button
                    onClick={handleEdit}
                    id="worksheetsentry-edit"
                    className="button"
                    variant="contained"
                  >
                    Edit
                  </Button>
                )}
              </div>
            );
          })}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorksheetsEntry;
