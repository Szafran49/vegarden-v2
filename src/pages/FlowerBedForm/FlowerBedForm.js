import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReturnButton from '../../shared/ReturnButton'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import styled from 'styled-components'

const StyledRadioGroup = styled(RadioGroup)`
  margin-top:20px;
`

export default function FlowerBedForm() {
  const navigation = useNavigate();
  const [value, setValue] = useState('large');
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [widthError, setWidthError] = useState(null);
  const [lengthError, setLengthError] = useState(null);

  function filterInput(e) {
    return e.replace(/\D+/g, '');
  }

  function handleWidthChange(e) {
    if (e.length === 1 && e === '0') {
      e = null
    }
    e = filterInput(e);
    setWidth(e);
    if (e.length !== 0) {
      setWidthError(false);
    }
  }

  function handleLengthChange(e) {
    if (e.length === 1 && e === '0') {
      e = null
    }
    e = filterInput(e);
    setLength(e);
    if (e.length !== 0) {
      setLengthError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (width && length) {
      navigation('../select-vegetables')
    }
    if (!width) {
      setWidthError(true);
    }
    if (!length) {
      setLengthError(true);
    }
  }

  const squareMeters = (width * length) / 10000;

  return (
    <>
      <ReturnButton to="/flower-beds/overview" />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography variant="h4" align="center">
          Podaj parametry grządki
        </Typography>
        <Typography align="center">
          Powierzchnia - {squareMeters} m<sup>2</sup>
        </Typography>
        <FormControl required fullWidth>
          <TextField
            autoFocus
            label="Szerokość w cm"
            id="width"
            variant="outlined"
            margin="normal"
            type="text"
            error={widthError}
            helperText={widthError ? "Wypełnij puste pole!" : ""}
            value={width}
            onChange={(e) => handleWidthChange(e.target.value)}
          />
          <TextField
            label="Długość w cm"
            id="length"
            variant="outlined"
            margin="normal"
            type="text"
            error={lengthError}
            helperText={lengthError ? "Wypełnij puste pole!" : ""}
            value={length}
            onChange={(e) => handleLengthChange(e.target.value)}
          />
          <Typography variant="h5" align="center">
            Nasłonecznienie
          </Typography>
          <StyledRadioGroup
            aria-label="insolation"
            name="insolation"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel value="large" control={<Radio />} label="Duże" />
            <FormControlLabel value="medium" control={<Radio />} label="Średnie" />
            <FormControlLabel value="small" control={<Radio />} label="Małe" />
          </StyledRadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={(e) => handleSubmit(e)}
        >
          Kontynuuj
              </Button>
      </Container>
    </>
  );
}
