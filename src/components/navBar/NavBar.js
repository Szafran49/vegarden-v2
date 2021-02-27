import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./NavBarLogo";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import SignoutButton from "./buttons/SignoutButton";
import UserProfileButton from "./buttons/UserProfileButton";
import Link from "../../shared/StyledLink";
import { useAuth } from "../../contexts/AuthContexts";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "white",
    height: "10vh",
  },
  logoContainer: {
    flexGrow: 1,
    height: "100%",
    marginLeft: "5vw",
    backgroundColor: "red",
  },
  buttonsContainer: {
    display: "block",
    marginRight: "calc(4vw + 10px)",
  },
}));

export default function NavBar() {
  const { currentUser } = useAuth();
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logoContainer}>
          <Logo />
        </div>
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
  );
}
