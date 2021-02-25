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
import { useAuth } from '../../contexts/AuthContexts'

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "white",
    height: "10vh",
  },
  logoContainer: {
    flexGrow: 1,
    height: "100%",
    marginLeft: "4vw",
  },
  buttons: {
    marginRight: "calc(4vw + 10px)",
  },

}));

export default function NavBar() {
  const { currentUser } = useAuth()
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logoContainer}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={classes.buttons}>
          {!currentUser &&
            <>
              <SigninButton />
              <SignupButton />
            </>
          }
          <UserProfileButton />
          <SignoutButton />
        </div>
      </Toolbar>
    </AppBar>
  );
}
