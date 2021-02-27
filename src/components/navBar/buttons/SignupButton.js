import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import StyledCloseButton from "../../../shared/StyledModalCloseButton";
import CloseIcon from "@material-ui/icons/CloseSharp";
import { useAuth } from "../../../contexts/AuthContexts";

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
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  signupButton: {
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: "white",
      boxShadow: `5px -5px ${theme.primary.darkGreen}`,
    },
  },
}));

export default function SignUpButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const { signUp, currentUser } = useAuth();
  const [error, setError] = useState("");

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
    setPasswordConfirm(value);
  }

  function handleSignUp() {
    if (password !== passwordConfirm) {
      setError("Hasła nie są jednakowe!");
    }
    console.log(currentUser);
    try {
      setError("");
      signUp(email, password);
    } catch {
      setError("Nie udało się stworzyć konta");
    }
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
              value={passwordConfirm}
              onChange={(e) => handlePasswordConfirmChange(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
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
      <Button
        onClick={handleOpen}
        variant="outlined"
        className={classes.signupButton}
      >
        Załóż konto
      </Button>
      {body}
    </>
  );
}
