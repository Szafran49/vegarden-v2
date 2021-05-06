import {
  Button,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Alert from './Alert';
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Recommendation from "./Recommendation";

const useStyles = makeStyles(() => ({
  menu: {
    opacity: 0,
    transition: "opacity 0.3s 0.1s linear",
  },
  description: {
    position: "relative ",
    display: "flex",
    height: 70,
    top: -79,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "1px solid black",
    borderRight: "1px dotted black",
    borderLeft: "1px dotted black",
  },

  widthDescription: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },

  widthEditDescription: {
    display: "flex",
    alignItems: "center",
    maxWidth: "auto",
  },
}));

export default function Column({
  index,
  width,
  handleVegetableDelete,
  handleVegetableForEditDisplayChange,
  handleVegetableWidthChange,
  recommendation,
}) {
  const [desiredWidth, setDesiredWidth] = useState(width);
  const [editWidthMode, setEditWidthMode] = useState(false);
  const [widthAlert, setWidthAlert] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  let inputRef = null;

  useEffect(() => {
    inputRef.focus();
  });

  const classes = useStyles();

  function handleEditWidthClick() {
    setEditWidthMode(true);
    setDesiredWidth(width);
    handleClose();
  }

  function handleVegetableWidthSubmit(index) {
    setEditWidthMode(false);
    const temp = parseInt(desiredWidth)
    if (temp > 0)
      handleVegetableWidthChange(index, desiredWidth);
    if (temp <= 0)
      setWidthAlert(true);
    setWidthAlert(false);
  }
  function handleVegetableChange() {
    handleVegetableForEditDisplayChange(index);
    handleClose();
  }

  function handleDelete(index) {
    handleVegetableDelete(index);
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div className={classes.description} style={{ minWidth: `100%` }}>
        <Typography>Rząd {index + 1}</Typography>
        <div
          className={classes.widthEditDescription}
          style={{ display: `${editWidthMode ? "" : "none"}` }}
        >
          <Input
            value={desiredWidth}
            onChange={(e) => setDesiredWidth(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleVegetableWidthSubmit(index)
              }
            }}
            style={{ maxWidth: 40 }}
            inputRef={(button) => {
              inputRef = button;
            }}
          />
          <Typography variant="h7">cm</Typography>
        </div>
        <IconButton
          onClick={() => handleVegetableWidthSubmit(index)}
          style={{
            padding: 0,
            marginBottom: 10,
            display: `${editWidthMode ? "" : "none"}`,
          }}
        >
          <DoneIcon />
        </IconButton>

        <div
          className={classes.widthDescription}
          style={{ display: `${editWidthMode ? "none" : ""}` }}
        >
          <Typography variant="h5" onClick={() => handleEditWidthClick()}>{width}</Typography>
          <Typography variant="h7">cm</Typography>
        </div>
      </div>
      <div className={classes.menu}>
        <Button
          aria-controls="col-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={handleOpen}
        >
          Edytuj
        </Button>
        <Recommendation recommendation={recommendation} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleVegetableChange()}>
            Zmień warzywo
          </MenuItem>
          <MenuItem onClick={() => handleEditWidthClick()}>
            Zmień szerokość
          </MenuItem>
          <MenuItem onClick={() => handleDelete(index)}>Usuń warzywo</MenuItem>
        </Menu>
        {widthAlert ? <Alert title="Podano niewłaściwą wartość." /> : null}
      </div>
    </>
  );
}
