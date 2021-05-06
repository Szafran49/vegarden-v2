import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import NavBarButton from "./NavBarButton";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StyledCloseButton from "../../../shared/StyledModalCloseButton";
import CloseIcon from "@material-ui/icons/CloseSharp";
import FormControl from "@material-ui/core/FormControl";
import { useAuth } from "../../../contexts/AuthContexts";
import LoadingRing from "../../../shared/LoadingRing";

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
}));

export default function SignInButton() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();


  const [error, setError] = useState();

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

  function handleSignIn() {
    setIsLoading(true)
    try {
      setError("");
      signIn(email, password);
    } catch {
      setError("Nie udało Ci się zalogować");
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
              onClick={() => handleSignIn()}
            >
              {isLoading ? <LoadingRing /> : <span>Zaloguj się</span>}
            </Button>
          </FormControl>
        </div>
      </Container>
    </Modal>
  );
  return (
    <>
      <NavBarButton onClick={handleOpen}>Zaloguj się</NavBarButton>
      {body}
    </>
  );
}
