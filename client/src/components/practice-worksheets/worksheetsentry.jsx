import "../../styling/faq/questions.css";
import "../../styling/practice-worksheets/worksheetsentry.css";
import Axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import React, { useState } from "react";

function WorksheetsEntry(props) {
  // Edit data
  const [draftName, setDraftName] = useState("");
  const [draftTopic, setDraftTopic] = useState("");
  const [draftGrade, setDraftGrade] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Delete worksheet HTTP request
  const handleDelete = (id) => {
    Axios.delete(`http://localhost:8000/api/delete-worksheet/${id}`);
  };

  // Update worksheet HTTP request
  const handleEdit = (id, e) => {
    e.preventDefault();

    const formData = new FormData();

    // Add data to formData
    formData.append("draftName", draftName);
    formData.append("draftTopic", draftTopic);
    formData.append("draftGrade", draftGrade);

    // Refresh input fields
    setDraftName("");
    setDraftGrade("");
    setDraftTopic("");

    // Send data to server
    Axios.put(`http://localhost:8000/api/update-worksheet/${id}`, formData);

    // Remove edit form
    setIsEditing(false);
  };

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
                    onClick={() => setIsEditing(true)}
                    id="worksheetsentry-edit"
                    className="button"
                    variant="contained"
                  >
                    Edit
                  </Button>
                )}
                {isEditing && (
                  <div id="worksheetsentry-form">
                    <form
                      onSubmit={(e) => handleEdit(worksheet._id, e)}
                      method="post"
                    >
                      <input
                        onChange={(e) => setDraftName(e.target.value)}
                        value={draftName}
                        type="text"
                        placeholder="Name"
                      />
                      <input
                        onChange={(e) => setDraftTopic(e.target.value)}
                        value={draftTopic}
                        type="text"
                        placeholder="Topic"
                      />
                      <input
                        onChange={(e) => setDraftGrade(e.target.value)}
                        value={draftGrade}
                        type="text"
                        placeholder="Grade"
                      />
                      <button type="submit">Submit</button>
                      <button type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                      </button>
                    </form>
                  </div>
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
