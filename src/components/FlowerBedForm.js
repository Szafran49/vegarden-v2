import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import DimensionForm from "./DimensionForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import InsolationForm from "./InsolationForm";
import Link from "../shared/StyledLink";

export default function FlowerBedForm() {
  return (
    <>
      <Link to="/flower-beds" exact>
        <IconButton size="small">
          <ArrowBackIcon /> Wróć
        </IconButton>
      </Link>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Parametry grządki
          </Typography>
          <form>
            <DimensionForm />
            <InsolationForm />
            <Link to="/flower-beds/choose-vegetables">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Kontynuuj
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </>
  );
}
