import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./NavBarLogo";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import Link from "../../shared/StyledLink";

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
    backgroundColor: "rgb(11, 184, 66)",
  }
}));

export default function NavBar() {
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
          <SignInButton />
          <SignUpButton />
        </div>
      </Toolbar>
    </AppBar>
  );
}
