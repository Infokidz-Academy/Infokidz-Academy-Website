import { useEffect, useState } from "react";
import Axios from "axios";
import "../../styling/practice-worksheets/worksheets.css";

function Worksheets() {
  const [worksheets, setWorksheets] = useState([]);
  useEffect(() => {
    async function getWorksheets() {
      const response = await Axios.get("http://localhost:8000/api/worksheets");
      setWorksheets(response.data);
    }
    getWorksheets();
  }, []);

  return (
    <div id="worksheets">
      {worksheets.map(function (worksheet) {
        return (
          <div id="worksheets-container">
            <h1>{worksheet.name}</h1>
            <a
              href={
                "http://localhost:8000/worksheets/" + worksheet.name + ".pdf"
              }
              style={{ color: "red" }}
            >
              {worksheet.name}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Worksheets;
