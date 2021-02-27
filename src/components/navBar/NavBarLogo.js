import logo from "./vegarden-logo.png";
import { Typography } from "@material-ui/core";
import Link from "../../shared/StyledLink";

const NavBarLogo = () => {
  return (
    <Link to="/">
      <Typography variant="h5">Vegarden</Typography>
    </Link>
  );
};

export default NavBarLogo;
