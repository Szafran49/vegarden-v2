import React, { useCallback } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "../../shared/StyledLink";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import FormControl from '@material-ui/core/FormControl'
import StyledCloseButton from '../../shared/StyledModalCloseButton'
import CloseIcon from '@material-ui/icons/CloseSharp'

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

export default function SignUpButton({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = useCallback(async event => {
    event.preventDefault()

  })
  const body = (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="sign-up-modal"
      aria-describedby="sign-up-modal"
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Rejestracja
          </Typography>
          <StyledCloseButton onClick={handleClose}>
            <CloseIcon />
          </StyledCloseButton>
          <FormControl fullWidth required>
            <TextField
              autoFocus
              required
              variant="outlined"
              id="username"
              label="Nazwa użytkownika"
              name="username"
              autoComplete="username"
              margin="normal"
            />
            <TextField
              required
              variant="outlined"
              id="email"
              label="Adres email"
              name="email"
              margin="normal"
              autoComplete="email"
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
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Załóż konto
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Masz już konto? Zaloguj się!
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
        Zarejestruj
      </Button>
      {body}
    </>
  );
}
