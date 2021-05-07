import { useState } from "react";
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
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));

export default function SignInButton() {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail()
    setPassword()
    setEmailError();
    setPasswordError();
  };

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handleSignIn() {
    setEmailError()
    setPasswordError()
    if (!email) {
      setEmailError(Errors.emptyField)
      setIsLoading(false)
      return;
    }
    if (!password) {
      setPasswordError(Errors.emptyField)
      setIsLoading(false)
      return;
    }
    setIsLoading(true)
    signIn(email, password).catch(function (error) {
      if (error.code === "auth/wrong-password") {
        setEmailError(true);
        setPasswordError(Errors.wrongEmailOrPassword)
      }
      if (error.code === "auth/too-many-requests") {
        setEmailError(true);
        setPasswordError(Errors.tooManyRequests)
      }
      setIsLoading(false)
    })
  }

  function handleEnterClick(event) {
    if (event.key === 'Enter')
      handleSignIn();
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
              error={emailError}
              helperText={emailError}
              onKeyDown={handleEnterClick}
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
              error={passwordError}
              helperText={passwordError}
              onKeyDown={handleEnterClick}
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
