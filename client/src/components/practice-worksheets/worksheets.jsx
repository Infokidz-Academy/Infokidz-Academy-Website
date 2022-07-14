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
}

export default Worksheets;
