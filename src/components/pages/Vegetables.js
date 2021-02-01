import Link from "../../shared/StyledLink";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import VegetableSelector from "../VegetableSelector";

export default function Vegetables(props) {
  return (
    <>
      <Link to="/flower-beds/create" exact>
        <IconButton size="small">
          <ArrowBackIcon /> {props.i}
        </IconButton>
      </Link>
      <VegetableSelector />
    </>
  );
}
