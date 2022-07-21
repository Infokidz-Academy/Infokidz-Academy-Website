import "../../styling/practice-worksheets/worksheetsform.css";
import Axios from "axios";
import { useState } from "react";

function WorksheetsForm() {
  // Form data
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [topic, setTopic] = useState("");
  const [fileName, setFileName] = useState("");

  //
  function handleCreate(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("grade", grade);
    formData.append("topic", topic);
    formData.append("fileName", "pdf");

    /*setName("");
    setSubject("");
    setGrade("");
    setTopic("");*/

    Axios.post("http://localhost:8000/api/create-worksheet", formData).catch(
      (err) => {
        console.log("eror in workshertsform" + err);
      }
    );

    /*
    Axios.post("http://localhost:8000/api/create-worksheet", {
      name,
      subject,
      grade,
      topic,
    });*/
  }

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
