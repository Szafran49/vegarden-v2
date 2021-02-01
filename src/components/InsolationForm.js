import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function InsolationForm() {
  const [value, setValue] = useState();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Nasłonecznienie</FormLabel>
      <RadioGroup
        aria-label="insolation"
        name="insolation"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="large" control={<Radio />} label="Duże" />
        <FormControlLabel value="male" control={<Radio />} label="Średnie" />
        <FormControlLabel value="other" control={<Radio />} label="Małe" />
      </RadioGroup>
    </FormControl>
  );
}
