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

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "white",
    height: "8vh",
  },
  logo: {
    flexGrow: 1,
    height: "100%",
    marginLeft: "5vw",
  },
  buttonsContainer: {
    position: "relative",
    right: 0,
    margin: "auto",
    marginRight: "calc(4vw + 10px)",
  },
  root: {
    flexGrow: 1,
  }
}));

export default function NavBar() {
  const { currentUser } = useAuth();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Logo />
          <div className={classes.buttonsContainer}>
            {!currentUser && (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
            <UserProfileButton />
            <SignoutButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
