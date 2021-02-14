import CreateFlowerBed from "./CreateFlowerBed";
import ExistingFlowerBeds from "./ExistingFlowerBeds";
import Grid from "@material-ui/core/Grid";
import ReturnButton from '../../shared/ReturnButton'

const FlowerBeds = () => {
  return (
    <>
      <Grid
        container
        direction="row-reverse"
        justify="center"
        alignItems="center"
        style={{ marginBottom: "20px" }}
      >
        <CreateFlowerBed />

        <ReturnButton to='/' />
      </Grid>
      <Grid>
        <ExistingFlowerBeds />
      </Grid>
    </>
  );
};

export default FlowerBeds;
