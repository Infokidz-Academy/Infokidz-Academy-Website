import { Suspense, useEffect, useState } from "react";
import Axios from "axios";
import "../../styling/practice-worksheets/worksheets.css";
import WorksheetsEntries from "./worksheetsentries";
import { CircularProgress } from "@mui/material";

function Worksheets(props) {
  // Worksheets data
  const [worksheets, setWorksheets] = useState([]);

  // Obtain worksheets from server
  useEffect(() => {
    async function getWorksheets() {
      const response = await Axios.get(
        `${process.env.REACT_APP_API_URL}/api/worksheets`
      );
      setWorksheets(response.data);
    }
    getWorksheets();
  }, []);

  // Map for math worksheets sorted by grades
  let mathGrades = new Map([]);
  for (let i = 3; i < 13; i++) {
    mathGrades.set(`${i}`, []);
  }

  // Map for english worksheets sorted by grades
  let englishGrades = new Map([]);
  for (let i = 3; i < 13; i++) {
    englishGrades.set(`${i}`, []);
  }

  // List of math topics
  let mathTopicsList = [
    "Angles",
    "Area",
    "Circumference",
    "Decimal Arithmetic",
    "Fraction Arithmetic",
  ];

  // Map for math worksheets sorted by topics
  let mathTopics = new Map([]);
  for (let i = 0; i < mathTopicsList.length; i++) {
    mathTopics.set(`${mathTopicsList[i]}`, []);
  }

  // List of english topics
  let englishTopicsList = [];

  // Map for english worksheets sorted by topics
  let englishTopics = [];
  for (let i = 0; i < englishTopicsList.length; i++) {
    englishTopics.set(`${englishTopicsList[i]}`, []);
  }

  // Traverse worksheets and add the them to the appropriate collections
  function updateWithData() {
    worksheets.forEach(function (worksheet) {
      if (worksheet.subject === "Math") {
        mathTopics.get(worksheet.topic).push(worksheet);
        mathGrades.get(worksheet.grade).push(worksheet);
      }
      if (worksheet.subject === "English") {
        englishTopics.get(worksheet.topic).push(worksheet);
        englishGrades.get(worksheet.grade).push(worksheet);
      }
    });
  }

  updateWithData();

  // Set of worksheets to render for math grades option
  let mathGradesWorksheets = [];

  for (let i = 3; i < 13; i++) {
    mathGradesWorksheets.push(
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
        key={i}
      >
        <WorksheetsEntries
          heading={`Grade ${i}`}
          worksheetSet={mathGrades.get(`${i}`)}
          description="Topic"
          isAdmin={props.isAdmin}
        />
      </Suspense>
    );
  }

  // Set of worksheets to render for english grades option
  let englishGradesWorksheets = [];

  for (let i = 3; i < 13; i++) {
    englishGradesWorksheets.push(
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
        key={i}
      >
        <WorksheetsEntries
          heading={`Grade ${i}`}
          worksheetSet={englishGrades.get(`${i}`)}
          description="Topic"
          isAdmin={props.isAdmin}
        />
      </Suspense>
    );
  }

  // Set of worksheets to render for math topics option
  let mathTopicsWorksheets = [];

  for (let i = 0; i < mathTopicsList.length; i++) {
    mathTopicsWorksheets.push(
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
        key={i}
      >
        <WorksheetsEntries
          heading={`${mathTopicsList[i]}`}
          worksheetSet={mathTopics.get(`${mathTopicsList[i]}`)}
          description="Grade"
          isAdmin={props.isAdmin}
        />
      </Suspense>
    );
  }

  // Set of worksheets to render for english topics option
  let englishTopicsWorksheets = [];

  for (let i = 0; i < englishTopicsList.length; i++) {
    englishTopicsWorksheets.push(
      <Suspense
        fallback={
          <CircularProgress style={{ marginLeft: "48%", marginTop: "20%" }} />
        }
        key={i}
      >
        <WorksheetsEntries
          heading={`${englishTopicsList[i]}`}
          worksheetSet={englishTopics.get(`${englishTopicsList[i]}`)}
          description="Grade"
          isAdmin={props.isAdmin}
        />
      </Suspense>
    );
  }

  return (
    <div id="worksheets">
      {props.subject === "Math" &&
        props.sort === "Grade" &&
        mathGradesWorksheets.map((entry) => {
          return entry;
        })}

      {props.subject === "English" &&
        props.sort === "Grade" &&
        englishGradesWorksheets.map((entry) => {
          return entry;
        })}

      {props.subject === "Math" &&
        props.sort === "Topic" &&
        mathTopicsWorksheets.map((entry) => {
          return entry;
        })}

      {props.subject === "English" &&
        props.sort === "Topic" &&
        englishTopicsWorksheets.map((entry) => {
          return entry;
        })}
    </div>
  );
}

export default Worksheets;
