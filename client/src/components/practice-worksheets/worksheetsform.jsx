import "../../styling/practice-worksheets/worksheetsform.css";
import Axios from "axios";
import { useState } from "react";

function WorksheetsForm() {
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
        <input type="file" name="pdf" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WorksheetsForm;
