import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./NavBarLogo";
import SignupButton from "./SignupButton";
import SigninButton from "./SigninButton";
import SignoutButton from "./SignoutButton";
import UserProfileButton from "./UserProfileButton";
import Link from "../../shared/StyledLink";
import { useAuth } from '../../contexts/AuthContexts'
const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    fontSize: 32,
  },
  logoWidth: {
    flexGrow: 10,
  },
  appBar: {
    background: "linear-gradient(to left, #017a28, #0bb842)",
  }
}));

export default function NavBar() {
  const { currentUser } = useAuth()
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logoWidth}>
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
