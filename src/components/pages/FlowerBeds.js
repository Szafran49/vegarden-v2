import CreateFlowerBed from "./CreateFlowerBed";
import ExistingFlowerBeds from "./ExistingFlowerBeds";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Link from "../../shared/StyledLink";
import Container from "@material-ui/core/Container";
const FlowerBeds = () => {
  return (
    <>
      <Link to="/">
        <IconButton size="small">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <CreateFlowerBed />
      </Grid>
      <Grid>
        <ExistingFlowerBeds />
      </Grid>
    </>
  );
};

export default FlowerBeds;
