import logo from "./logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "../../shared/StyledLink";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    marginLeft: "5vw",
  },
  text: {
    color: theme.colors.green,
    marginTop: 5,
  },
  logo: {
    display: "flex",
  },
}));

const NavBarLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <Link to="/" >
        <div className={classes.logo}>
          <img
            src={logo}
            alt="logo"
            className={classes.image}
          />
          <Typography variant="h4" className={classes.text}>
            Vegarden
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default NavBarLogo;
