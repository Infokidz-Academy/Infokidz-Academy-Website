import "../styling/formdialog.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FormDialog(props) {
  return (
    <div id="formdialog">
      <Dialog
        open={props.open}
        onClose={() => props.closeDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.closeDialog(false)}
            autoFocus
            id="formdialog-button"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
