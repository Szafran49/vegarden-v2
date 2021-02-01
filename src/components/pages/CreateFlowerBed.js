import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Link from "../../shared/StyledLink";
import CreateFlowerBedIcon from "@material-ui/icons/Crop169Sharp";

export default function CreateFlowerBed() {
  return (
    <>
      <Link to="/flower-beds/create">
        <IconButton>
          <CreateFlowerBedIcon />
          Utwórz grządkę
        </IconButton>
      </Link>
    </>
  );
}
