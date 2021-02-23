import Button from "@material-ui/core/Button";
import { useAuth } from '../../contexts/AuthContexts'
import { useNavigate } from "react-router";
import { useState } from 'react'
import LoginReminder from "./LoginReminder";
import { makeStyles } from '@material-ui/core/styles'
import backgroundImage from './background.jpg'
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  startButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    height: "50px",
    width: "200px",
    borderRadius: "10px",
    fontSize: "24px",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: "white",
    }
  },
  image: {
    height: "100%",
    width: "100%",
  },

  container: {
    height: "calc(100vh - 81px)",
    maxWidth: "90vw ",

  }
}));

const Home = () => {
  const { currentUser } = useAuth();
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  var modalBody = <LoginReminder isOpen={open} setOpen={setOpen} />;

  const handleClick = () => {
    if (!currentUser) {
      setOpen(true)
    }
    else {
      navigate('/flower-beds/overview')
    }
  }

  return (
    <Container
      fluid
      className={classes.container}
    >
      <img className={classes.image} src={backgroundImage} alt="background" />
      <Button variant="contained" onClick={handleClick} className={classes.startButton}>Start</Button>
      {modalBody}
    </Container>
  );
};

export default Home;
