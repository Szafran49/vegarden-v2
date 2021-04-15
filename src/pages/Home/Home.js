import Button from "@material-ui/core/Button";
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from "react-router";
import { useState } from "react";
import LoginReminder from "./LoginReminder";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "./background.jpg";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  startButton: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "45%",
    height: "50px",
    transform: "translateY(-50%)",
    fontSize: "1.5rem",
    textDecoration: "none",
    width: 120,
    [theme.breakpoints.down('xs')]: {

    },
    [theme.breakpoints.down('sm')]: {
      left: "40%"
    },

    "&:hover": {
      backgroundColor: "white",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    [theme.breakpoints.down('xs')]: {
      visibility: "hidden",
    },

  },
  container: {
    height: "700px",
    maxWidth: "90vw",
  },
}));

const Home = () => {
  const { currentUser } = useAuth();
  const classes = useStyles();
  const [openModalWindow, setOpenModalWindow] = useState(false);
  const navigate = useNavigate();

  var modalBody = (
    <LoginReminder isOpen={openModalWindow} setOpen={setOpenModalWindow} />
  );

  const handleClick = () => {
    if (!currentUser) {
      setOpenModalWindow(true);
    } else {
      navigate("/garden/select-type");
    }
  };

  return (
    <Container className={classes.container}>
      <img className={classes.image} src={backgroundImage} alt="background" />
      <Button
        variant="contained"
        onClick={handleClick}
        className={classes.startButton}
      >
        Start
      </Button>
      {modalBody}
    </Container>
  );
};

export default Home;
