import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ProjectLogo from "./NavBarLogo";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import Link from "../../shared/StyledLink";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
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
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logoWidth}>
            <Link to="/" exact>
              <div className={classes.logo}>
                <ProjectLogo />
              </div>
            </Link>
          </div>
          <div className={classes.buttons}>
            <SignInButton />
            <SignUpButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
