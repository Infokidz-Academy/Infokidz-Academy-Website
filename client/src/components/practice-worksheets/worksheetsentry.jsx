import "../../styling/practice-worksheets/worksheetsentry.css";
import Axios from "axios";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

function WorksheetsEntry(props) {
  // Edit data
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
    formData.append("draftTopic", draftTopic);
    formData.append("draftGrade", draftGrade);

    // Refresh input fields
    setDraftGrade("");
    setDraftTopic("");

    // Send data to server
    Axios.put(`http://localhost:8000/api/update-worksheet/${id}`, formData);

    // Remove edit form
    setIsEditing(false);
  };

  // Cancel edit form
  const cancelEdit = () => {
    setIsEditing(false);
    setDraftGrade("");
    setDraftTopic("");
  };

  return (
    <div>
      <a href={props.worksheet.pdfUrl} id="worksheetsentry-link">
        {props.worksheet.name}
      </a>{" "}
      | {props.description}:{" "}
      {props.description === "Topic"
        ? props.worksheet.topic
        : props.worksheet.grade}
      {props.isAdmin && (
        <Button
          onClick={() => handleDelete(props.worksheet._id)}
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
            onSubmit={(e) => handleEdit(props.worksheet._id, e)}
            method="post"
          >
            <Grid container spacing={1} justifyContent="center">
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <TextField
                  label="Topic"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={draftTopic}
                  inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
                  InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
                  onChange={(e) => setDraftTopic(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={3}>
                <TextField
                  label="Grade"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={draftGrade}
                  inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
                  InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
                  onChange={(e) => setDraftGrade(e.target.value)}
                />
              </Grid>
              <Grid item xs={4} sm={2} md={2} lg={1}>
                <Button
                  type="submit"
                  variant="contained"
                  className="worksheetsentry-button"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={4} sm={2} md={2} lg={1}>
                <Button
                  type="button"
                  variant="contained"
                  className="worksheetsentry-button"
                  fullWidth
                  onClick={() => cancelEdit()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      )}
    </div>
  );
}

export default WorksheetsEntry;
