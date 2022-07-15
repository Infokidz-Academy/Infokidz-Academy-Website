import "../../styling/practice-worksheets/worksheetsselection.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

function WorksheetsSelection(props) {
  return (
    <div id="worksheetsselection">
      <h1 id="worksheetsselection-title">Practice Worksheets</h1>
      <h2 id="worksheetsselection-description">
        Select the subject and your sorting preference to view the corresponding
        Infokidz practice worksheets.
      </h2>

      {/*Selection*/}
      <Grid item xs={12} sm={6}>
        <FormControl className="textField">
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ fontSize: "var(--fs-3)" }}
          >
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
              label={
                <Typography sx={{ fontSize: "var(--fs-3)" }}>Math</Typography>
              }
              onChange={(e) => props.setSubject(e.target.value)}
            />
            <FormControlLabel
              value="English"
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "var(--fs-3)" }}>
                  English
                </Typography>
              }
              onChange={(e) => props.setSubject(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <FormControl className="textField">
          <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: 24 }}>
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
              label={
                <Typography sx={{ fontSize: "var(--fs-3)" }}>Grade</Typography>
              }
              onChange={(e) => props.setSort(e.target.value)}
            />
            <FormControlLabel
              value="Topic"
              control={<Radio />}
              label={
                <Typography sx={{ fontSize: "var(--fs-3)" }}>Topic</Typography>
              }
              onChange={(e) => props.setSort(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <h1 id="worksheetsselection-label">
        {props.subject} worksheets sorted by {props.sort}:
      </h1>
    </div>
  );
}

export default WorksheetsSelection;
