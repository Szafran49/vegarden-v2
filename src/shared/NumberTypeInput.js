import { Input, TextField } from "@material-ui/core";
import { useState } from 'react'

export default function NumberTypeInput({ number, errorFlag }, ...props) {
    const [value, setValue] = useState(null);
    const [error, setError] = useState(false);

    function handleValueChange(e) {
        if (e.length === 1 && e === '0') {
            e = null
            return;
        }
        e = filterInput(e);
        setValue(e);
        if (e.length !== 0) {
            setError(false);
        }
    }

    function filterInput(e) {
        return e.replace(/\D+/g, '');
    }

    return (
        <Input onChange={(e) => handleValueChange(e.target.value)} {...props} />
    )
}