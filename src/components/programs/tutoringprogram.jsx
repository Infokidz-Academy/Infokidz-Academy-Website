import "../../styling/programs/tutoringprogram.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function TutoringProgram(props) {
  return (
    <div id="tutoringprogram">
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        id="tutoringprogram-title"
      >
        {props.title}
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default TutoringProgram;
