import { Button, Container, FormControl, Modal, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import StyledModalCloseButton from '../../../shared/StyledModalCloseButton';
import { useState } from 'react'
import CloseIcon from "@material-ui/icons/CloseSharp";
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        top: 110,
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    submit: {
        margin: theme.spacing(3, 0, 1),
    },
}));

export default function SubmitProject({ projectName, setProjectName, handleSaveToTheDatabase }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleProjectNameChange(name) {
        setProjectName(name)

    }
    function handleSave() {
        handleSaveToTheDatabase(projectName)
        handleClose()
    }

    const body = (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="sign-in-modal"
            aria-describedby="sign-in-modal"
        >
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h6">
                        Nadaj swojemu ogródkowi nazwę, aby móc go zapisać!
                    </Typography>
                    <StyledModalCloseButton onClick={handleClose}>
                        <CloseIcon />
                    </StyledModalCloseButton>
                    <FormControl fullWidth required>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            id="text"
                            label="Nazwa projektu"
                            name="projectName"
                            autoComplete="text"
                            value={projectName}
                            onChange={(e) => handleProjectNameChange(e.target.value)}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={() => handleSave(projectName)}
                        >
                            Gotowe!
                </Button>
                    </FormControl>
                </div>
            </Container>
        </Modal>
    );
    return (
        <>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={() => handleOpen()}
            >
                Zapisz
             </Button>
            {body}
        </>
    )
}

