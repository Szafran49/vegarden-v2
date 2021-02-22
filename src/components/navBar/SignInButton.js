import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StyledCloseButton from '../../shared/StyledModalCloseButton'
import CloseIcon from '@material-ui/icons/CloseSharp'
import FormControl from '@material-ui/core/FormControl'
import { useAuth } from '../../contexts/AuthContexts'
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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { signIn, currentUser } = useAuth();
  const [error, setError] = useState()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleEmailChange(value) {
    setEmail(value)
  }

  function handlePasswordChange(value) {
    setPassword(value)
  }

  function handleSignIn() {
    try {
      setError("")
      signIn(email, password)
    }
    catch {
      setError("Nie udało się stworzyć konta")
    }
  }

  const body = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-in-modal"
      aria-describedby="sign-in-modal"
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Logowanie
          </Typography>
          <StyledCloseButton onClick={handleClose}>
            <CloseIcon />
          </StyledCloseButton>
          <FormControl fullWidth required>
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Adres email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              name="password"
              label="Hasło"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignIn()}
            >
              Zaloguj się
            </Button>
          </FormControl>
        </div>
      </Container>
    </Modal>
  );
  return (
    <>
      <Button onClick={handleOpen} variant="outlined">
        Zaloguj się
      </Button>
      {body}
    </>
  );
}

