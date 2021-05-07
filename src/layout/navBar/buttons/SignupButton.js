import React, { useState } from "react";
import NavBarButton from "./NavBarButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import StyledCloseButton from "../../../shared/StyledModalCloseButton";
import CloseIcon from "@material-ui/icons/CloseSharp";
import { useAuth } from "../../../contexts/AuthContexts";
import Errors from './ModalErrors'

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: 110,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignUpButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatedPassword, setRepeatedPassword] = useState();
  const { signUp, currentUser } = useAuth();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [repeatedPasswordError, setRepeatedPasswordError] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handlePasswordConfirmChange(value) {
    setRepeatedPassword(value);
  }

  function handleSignUp() {
    setEmailError()
    setPasswordError()
    setRepeatedPasswordError()
    if (!email) {
      setEmailError(Errors.emptyField)
      return;
    }
    if (!password) {
      setPasswordError(Errors.emptyField)
      return;
    }
    if (!repeatedPassword) {
      setRepeatedPasswordError(Errors.emptyField)
      return;
    }
    if (password !== repeatedPassword) {
      setRepeatedPasswordError(Errors.passwordsAreNotTheSame);
      return;
    }

    signUp(email, password).catch(function (error) {
      if (error.code === "auth/weak-password") {
        setPasswordError(Errors.weakPassword);
      }
      if (error.code === "auth/email-already-in-use")
        setEmailError(Errors.emailAlreadyInUse);
    })
  }

  const body = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-up-modal"
      aria-describedby="sign-up-modal"
    >
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Rejestracja
          </Typography>
          <StyledCloseButton onClick={handleClose}>
            <CloseIcon />
          </StyledCloseButton>
          <FormControl fullWidth required>
            {currentUser && currentUser.email}
            <TextField
              required
              variant="outlined"
              id="email"
              label="Adres email"
              name="email"
              margin="normal"
              autoComplete="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              autoFocus
              error={emailError}
              helperText={emailError}
            />
            <TextField
              required
              variant="outlined"
              name="password"
              label="Hasło"
              type="password"
              id="password"
              margin="normal"
              autoComplete="current-password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              error={passwordError}
              helperText={passwordError}
            />
            <TextField
              required
              variant="outlined"
              name="password-confirm"
              label="Powtórz hasło"
              type="password"
              id="password-confirm"
              margin="normal"
              autoComplete="current-password"
              value={repeatedPassword}
              onChange={(e) => handlePasswordConfirmChange(e.target.value)}
              error={repeatedPasswordError}
              helperText={repeatedPasswordError}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => handleSignUp(e)}
            >
              Załóż konto
            </Button>
          </FormControl>
        </div>
      </Container>
    </Modal>
  );

  return (
    <>
      <NavBarButton
        onClick={handleOpen}
      >
        Załóż konto
      </NavBarButton>
      {body}
    </>
  );
}
