import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ProjectLogo from "./NavBarLogo";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    fontSize: 32,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.logo}>
            <ProjectLogo className={classes.logo} />
          </div>
          <LogInButton />
          <SignUpButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
