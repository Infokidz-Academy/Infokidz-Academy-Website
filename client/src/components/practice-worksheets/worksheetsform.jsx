//import "../../styling/practice-worksheets/worksheetsform.css";
import Axios from "axios";
import React, { useState } from "react";

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
    Axios.post("http://localhost:8000/api/create-worksheet", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div id="worksheetsform">
      <form
        onSubmit={handleCreate}
        method="post"
        encType="multipart/form-data"
        style={{ marginTop: "400px" }}
      >
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          type="text"
          placeholder="Subject"
          required
        />
        <input
          onChange={(e) => setGrade(e.target.value)}
          value={grade}
          type="text"
          placeholder="Grade"
          required
        />
        <input
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
          type="text"
          placeholder="Topic"
          required
        />
        <label htmlFor="pdf">Upload pdf</label>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WorksheetsForm;
