import React from "react";
import TextField from '@material-ui/core/TextField'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(1)
  },
  radioGroup: {
    marginTop: "20px",
  }
}));

export default function Form({ width, length, setWidth, setLength, insolationValue, setInsolationValue, widthError, setWidthError, lengthError, setLengthError }) {

  const classes = useStyles()
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

  const squareMeters = (width * length) / 10000;

  return (
    <>
      <Container maxWidth="sm" align="center">
        <Typography variant="h4" align="center" className={classes.title}>
          Podaj wymiary powierzchni
        </Typography>
        <Typography variant="h5" align="center">
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
          <RadioGroup
            className={classes.radioGroup}
            aria-label="insolation"
            name="insolation"
            value={insolationValue}
            onChange={(e) => setInsolationValue(e.target.value)}
          >
            <FormControlLabel value="large" control={<Radio />} label="Duże" />
            <FormControlLabel value="small" control={<Radio />} label="Małe" />
          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
}
