import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "../../shared/StyledLink";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import StyledCloseButton from '../../shared/StyledModalCloseButton'
import CloseIcon from '@material-ui/icons/CloseSharp'
import app from '../../data/firebase'
import FormControl from '@material-ui/core/FormControl'

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

function SignInButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Zapamiętaj"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Zaloguj się
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Zapomniałeś hasła?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Nie masz konta? Założysz je tutaj!"}
                </Link>
              </Grid>
            </Grid>
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

export default SignInButton;
