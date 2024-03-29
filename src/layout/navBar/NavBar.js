import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./NavBarLogo";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import SignoutButton from "./buttons/SignoutButton";
import UserProfileButton from "./buttons/UserProfileButton";
import { useAuth } from "../../contexts/AuthContexts";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "white",
    minHeight: "9vh",
    [theme.breakpoints.down('xs')]: {
      height: 80,
    },
  },
  buttonsContainer: {
    right: 0,
    margin: "auto",
    marginRight: "calc(4vw + 10px)",
  },
}));

export default function NavBar() {
  const { currentUser } = useAuth();
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Logo />
        <div className={classes.buttonsContainer}>
          {currentUser === null ?
            <>
              <SigninButton />
              <SignupButton />
            </> :
            <>
              <UserProfileButton />
              <SignoutButton />
            </>
          }
        </div>
      </Toolbar>
    </AppBar>
  );
}
