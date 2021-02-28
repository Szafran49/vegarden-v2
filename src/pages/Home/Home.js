import Button from "@material-ui/core/Button";
import { useAuth } from "../../contexts/AuthContexts";
import { useNavigate } from "react-router";
import { useState } from "react";
import LoginReminder from "./LoginReminder";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "./background.jpg";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  startButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    height: "50px",
    width: "10%",
    fontSize: "24px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  image: {
    height: "100%",
    width: "100%",
  },

  container: {
    height: "92vh",
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
      navigate("/garden/create");
    }
  };

  return (
    <Container fluid className={classes.container}>
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
