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
  let mathGrades = new Map([
    ["3", []],
    ["4", []],
    ["5", []],
    ["6", []],
    ["7", []],
    ["8", []],
    ["9", []],
    ["10", []],
    ["11", []],
    ["12", []],
  ]);

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

  // Variables representing math documents corresponding to each grade
  let mathGradesThree = mathGrades.get("3");
  let mathGradesFour = mathGrades.get("4");
  let mathGradesFive = mathGrades.get("5");
  let mathGradesSix = mathGrades.get("6");
  let mathGradesSeven = mathGrades.get("7");
  let mathGradesEight = mathGrades.get("8");
  let mathGradesNine = mathGrades.get("9");
  let mathGradesTen = mathGrades.get("10");
  let mathGradesEleven = mathGrades.get("11");
  let mathGradesTwelve = mathGrades.get("12");

  // Variables representing english documents corresponding to each grade
  let englishGradesThree = englishGrades.get("3");
  let englishGradesFour = englishGrades.get("4");
  let englishGradesFive = englishGrades.get("5");
  let englishGradesSix = englishGrades.get("6");
  let englishGradesSeven = englishGrades.get("7");
  let englishGradesEight = englishGrades.get("8");
  let englishGradesNine = englishGrades.get("9");
  let englishGradesTen = englishGrades.get("10");
  let englishGradesEleven = englishGrades.get("11");
  let englishGradesTwelve = englishGrades.get("12");

  // Variables representing math documents corresponding to each topic
  let mathTopicsAngles = mathTopics.get("Angles");
  let mathTopicsArea = mathTopics.get("Area");
  let mathTopicsCircumference = mathTopics.get("Circumference");
  let mathTopicsDecimalArithmetic = mathTopics.get("Decimal Arithmetic");
  let mathTopicsFractionArithmetic = mathTopics.get("Fraction Arithmetic");

  // Variables representing english documents corresponding to each grade
}

export default Worksheets;
