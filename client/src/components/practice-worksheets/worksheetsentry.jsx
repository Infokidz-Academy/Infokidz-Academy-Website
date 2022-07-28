import "../../styling/practice-worksheets/worksheetsentry.css";
import Axios from "axios";
import { Button } from "@mui/material";
import React, { useState } from "react";
import "../../styling/practice-worksheets/worksheetsentries.css";

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
            <button type="button" onClick={() => cancelEdit()}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default WorksheetsEntry;
