import { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({}));

export default function CustomAlert() {
  const classes = useStyles();
  const [open, setOpen] = useState();

  useEffect(function changeDisplay() {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          Podana szerokość przekraczyła szerokość ogródka. Wykorzystano całą
          pozostałą przestrzeń.
        </Alert>
      </Snackbar>
    </div>
  );
}
