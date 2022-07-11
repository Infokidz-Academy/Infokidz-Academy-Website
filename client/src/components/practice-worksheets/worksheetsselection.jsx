import "../../styling/practice-worksheets/worksheetsselection.css";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useRef } from "react";

function WorksheetsSelection() {
  /*States for form selection options*/
  const [subject, setSubject] = useState("Math");
  const [sort, setSort] = useState("Grade");

  return (
    <div id="worksheetsselection">
      <h1 id="worksheetsselection-title">Practice Worksheets</h1>
      <h2 id="worksheetsselection-description">
        Select the subject and your sorting preference to view the corresponding
        Infokidz practice worksheets.
      </h2>

      {/*Selection*/}
      <Card>
        <CardContent>
          <Grid item xs={12} sm={6}>
            <FormControl className="textField">
              <FormLabel id="demo-radio-buttons-group-label">
                Subject:
              </FormLabel>
              <RadioGroup
                name="subject"
                variant="outlined"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Math"
                row
              >
                <FormControlLabel
                  value="Math"
                  control={<Radio />}
                  label={<Typography sx={{ fontSize: 24 }}>Math</Typography>}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <FormControlLabel
                  value="English"
                  control={<Radio />}
                  label={<Typography sx={{ fontSize: 24 }}>English</Typography>}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl className="textField">
              <FormLabel id="demo-radio-buttons-group-label">
                Sort By:
              </FormLabel>
              <RadioGroup
                name="tutoringReason"
                variant="outlined"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Grade"
                row
              >
                <FormControlLabel
                  value="Grade"
                  control={<Radio />}
                  label={<Typography sx={{ fontSize: 24 }}>Grade</Typography>}
                  onChange={(e) => setSort(e.target.value)}
                />
                <FormControlLabel
                  value="Topic"
                  control={<Radio />}
                  label={<Typography sx={{ fontSize: 24 }}>Topic</Typography>}
                  onChange={(e) => setSort(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default WorksheetsSelection;
