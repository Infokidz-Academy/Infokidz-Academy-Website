import "../../styling/practice-worksheets/worksheetsform.css";
import Axios from "axios";
import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

function WorksheetsForm() {
  // Form data
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [topic, setTopic] = useState("");
  const [file, setFile] = useState("");

  // Submit form data
  const handleCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Add data to formData
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("grade", grade);
    formData.append("topic", topic);
    formData.append("file", file);

    // Refresh input fields
    setName("");
    setSubject("");
    setGrade("");
    setTopic("");
    setFile("");

    // POST data to server
    Axios.post("http://localhost:5000/api/create-worksheet", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div id="worksheetsform">
      <h1 id="worksheetsform-heading">Create new worksheet</h1>
      <form onSubmit={handleCreate} method="post" encType="multipart/form-data">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={name}
              inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
              InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={1}>
            <TextField
              label="Subject"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={subject}
              inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
              InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
              onChange={(e) => setSubject(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={1}>
            <TextField
              label="Grade"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={grade}
              inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
              InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
              onChange={(e) => setGrade(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3} md={2} lg={2}>
            <TextField
              label="Topic"
              variant="outlined"
              size="small"
              fullWidth
              required
              value={topic}
              inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
              InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
              onChange={(e) => setTopic(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={2} lg={3}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              required
              type="file"
              name="file"
              inputProps={{ style: { fontSize: 19 }, maxLength: 30 }} // font size of input text and max-length of input
              InputLabelProps={{ style: { fontSize: 19 } }} // font size of input label
              onChange={(e) => setFile(e.target.files[0])}
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
        </Grid>
      </form>
    </div>
  );
}

export default WorksheetsForm;
