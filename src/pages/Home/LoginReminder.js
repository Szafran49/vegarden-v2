import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import StyledCloseButton from "../../shared/StyledModalCloseButton";
import CloseIcon from "@material-ui/icons/CloseSharp";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    height: 170,
    top: -200,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    padding: theme.spacing(3),
    textAlign: "center",
  },
  button: {
    position: "absolute",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10px",
  },
}));

export default function LoginReminder({ isOpen, setOpen }) {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleClose() {
    setOpen(false);
  }

  function handleClick() {
    navigate("/flower-beds/overview");
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => handleClose()}
      aria-labelledby="modal"
      aria-describedby="modal"
    >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h6">
            Przed rozpoczęciem projektowania zalecamy rejestrację! Umożliwi to
            zapisywanie projektów!
          </Typography>
          <StyledCloseButton onClick={() => handleClose()}>
            <CloseIcon />
          </StyledCloseButton>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => handleClick()}
            className={classes.button}
          >
            Kontynuuj bez rejestracji
          </Button>
        </div>
      </Container>
    </Modal>
  );
}
