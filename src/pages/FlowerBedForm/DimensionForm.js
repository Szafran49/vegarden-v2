import TextField from "@material-ui/core/TextField";
import { useState } from "react";

export default function DimensionForm() {
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);

  function handleWidthChange(e) {
    setWidth(e);
  }
  function handleLengthChange(e) {
    setLength(e);
  }

  const squareMeters = (width * length) / 10000;
  return (
    <>
      <TextField
        label="Szerokość w cm"
        id="width"
        variant="outlined"
        margin="normal"
        type="number"
        required
        fullWidth
        autoFocus
        value={width}
        onChange={(e) => handleWidthChange(e.target.value)}
      />
      <TextField
        label="Długość w cm"
        id="length"
        variant="outlined"
        margin="normal"
        type="number"
        required
        fullWidth
        value={length}
        onChange={(e) => handleLengthChange(e.target.value)}
      />
      <p>
        Powierzchnia - {squareMeters} m<sup>2</sup>
      </p>
    </>
  );
}
