import "../../styling/faq/questions.css";
import "../../styling/practice-worksheets/worksheetsentry.css";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";

function WorksheetsEntry(props) {
  // Delete worksheet HTTP request
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:8000/api/delete-worksheet/${id}`);
  };

  // Update worksheet HTTP request
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
                <a href={worksheet.pdfUrl} id="worksheetsentry-link">
                  {worksheet.name}
                </a>{" "}
                | {props.description}:{" "}
                {props.description === "Topic"
                  ? worksheet.topic
                  : worksheet.grade}
                {props.isAdmin && (
                  <Button
                    onClick={() => handleDelete(worksheet._id)}
                    id="worksheetsentry-delete"
                    className="button"
                    variant="contained"
                  >
                    Delete
                  </Button>
                )}
                {props.isAdmin && (
                  <Button
                    onClick={() => handleEdit}
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
