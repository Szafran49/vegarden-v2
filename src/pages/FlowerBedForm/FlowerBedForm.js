import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import DimensionForm from "./DimensionForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InsolationForm from "./InsolationForm";
import ReturnButton from '../../shared/ReturnButton'
import FormControl from '@material-ui/core/FormControl'
import { useNavigate } from "react-router-dom";

export default function FlowerBedForm() {
  const navigation = useNavigate();

  function handleSubmit() {
    navigation('../select-vegetables')
  }
  return (
    <>
      <ReturnButton to="/flower-beds/overview" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Parametry grządki
        </Typography>
        <FormControl required fullWidth>
          <DimensionForm />
          <InsolationForm />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => handleSubmit()}
          >
            Kontynuuj
              </Button>
        </FormControl>
      </Container>
    </>
  );
}
