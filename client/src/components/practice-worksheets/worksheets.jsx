import { useEffect, useState } from "react";
import Axios from "axios";
import "../../styling/practice-worksheets/worksheets.css";
import WorksheetsEntry from "./worksheetsentry";

function Worksheets() {
  // Worksheets data
  const [worksheets, setWorksheets] = useState([]);

  // Obtain worksheets from server
  useEffect(() => {
    async function getWorksheets() {
      const response = await Axios.get("http://localhost:8000/api/worksheets");
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
  let englishGrades = new Map(mathGrades);

  // Map for math worksheets sorted by topics
  let mathTopics = new Map([
    ["Angles", []],
    ["Area", []],
    ["Circumference", []],
    ["Decimal Arithmetic", []],
    ["Fraction Arithmetic", []],
  ]);

  // Map for english worksheets sorted by topics
  let englishTopics = [];

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
  let mathGradesWorksheets = (
    <div id="worksheets">
      <WorksheetsEntry
        heading="Grade 3"
        worksheetSet={mathGrades.get("3")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 4"
        worksheetSet={mathGrades.get("4")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 5"
        worksheetSet={mathGrades.get("5")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 6"
        worksheetSet={mathGrades.get("6")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 7"
        worksheetSet={mathGrades.get("7")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 8"
        worksheetSet={mathGrades.get("8")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 9"
        worksheetSet={mathGrades.get("9")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 10"
        worksheetSet={mathGrades.get("10")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 11"
        worksheetSet={mathGrades.get("11")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 12"
        worksheetSet={mathGrades.get("12")}
        description="Topic"
      />
    </div>
  );

  // Set of worksheets to render for english grades option
  let englishGradesWorksheets = (
    <div id="worksheets">
      <WorksheetsEntry
        heading="Grade 3"
        worksheetSet={englishGrades.get("3")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 4"
        worksheetSet={englishGrades.get("4")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 5"
        worksheetSet={englishGrades.get("5")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 6"
        worksheetSet={englishGrades.get("6")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 7"
        worksheetSet={englishGrades.get("7")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 8"
        worksheetSet={englishGrades.get("8")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 9"
        worksheetSet={englishGrades.get("9")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 10"
        worksheetSet={englishGrades.get("10")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 11"
        worksheetSet={englishGrades.get("11")}
        description="Topic"
      />
      <WorksheetsEntry
        heading="Grade 12"
        worksheetSet={englishGrades.get("12")}
        description="Topic"
      />
    </div>
  );

  // Set of worksheets to render for math topics option
  let mathTopicsWorksheets = (
    <div id="worksheets">
      <WorksheetsEntry
        heading="Angles"
        worksheetSet={mathTopics.get("Angles")}
        description="Grade"
      />
      <WorksheetsEntry
        heading="Area"
        worksheetSet={mathTopics.get("Area")}
        description="Grade"
      />
      <WorksheetsEntry
        heading="Circumference"
        worksheetSet={mathTopics.get("Circumference")}
        description="Grade"
      />
      <WorksheetsEntry
        heading="Decimal Arithmetic"
        worksheetSet={mathTopics.get("Decimal Arithmetic")}
        description="Grade"
      />
      <WorksheetsEntry
        heading="Fraction Arithmetic"
        worksheetSet={mathTopics.get("Fraction Arithmetic")}
        description="Grade"
      />
    </div>
  );

  // Set of worksheets to render for english topics option

  return mathGradesWorksheets;
}

export default Worksheets;
