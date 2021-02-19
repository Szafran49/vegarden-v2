import IconButton from "@material-ui/core/IconButton";
import Link from "../../shared/StyledLink";
import CreateFlowerBedIcon from "@material-ui/icons/Crop169Sharp";
export default function ExistingFlowerBeds() {
  return (
    <>

      <Link to="/flower-beds">
        <IconButton>
          <CreateFlowerBedIcon />
          Jakaś tam grządka nr 1
        </IconButton>
      </Link>
      <Link to="/flower-beds">
        <IconButton>
          <CreateFlowerBedIcon />
          Jakaś tam grządka nr 2
        </IconButton>
      </Link>
      <Link to="/flower-beds">
        <IconButton>
          <CreateFlowerBedIcon />
          Jakaś tam grządka nr 3
        </IconButton>
      </Link>
    </>
  );
}
