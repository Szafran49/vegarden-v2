import logo from "./logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../../shared/StyledLink";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginLeft: "5vw",
  },
  logoText: {
    color: theme.colors.green,
  },
  logoContainer: {
    display: "flex",
  },
  image: {
    width: "10%",

  }
}));

const NavBarLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Link to="/">
        <div className={classes.logoContainer}>
          <img
            src={logo}
            alt="logo"
            className={classes.image}
          />
          <Typography variant="h4" className={classes.logoText}>
            Vegarden
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default NavBarLogo;
