import Form from './Form/Form'
import SelectVegetables from './SelectVegetables/SelectVegetables'
import { useState, useEffect } from 'react'
import { Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../contexts/AuthContexts'
import { firestore } from "../../data/firebase";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3, 1),
        padding: theme.spacing(1, 3),
    },
    container: {
    }
}));

export default function CreateGarden() {
    const classes = useStyles()
    const { currentUser } = useAuth()
    const [currentStep, setCurrentStep] = useState(1)
    const [width, setWidth] = useState(null)
    const [length, setLength] = useState(null)
    const [widthError, setWidthError] = useState(null);
    const [lengthError, setLengthError] = useState(null);
    const [insolationValue, setInsolationValue] = useState("large")
    const [items, setItems] = useState([]);

    useEffect(
        function loadData() {
            const fetchData = async () => {
                const vegetables = await firestore.collection("Vegetables").get();
                const tmp = [];
                vegetables.docs.map(async (doc) => {
                    tmp.push({ id: doc.id, ...doc.data() });
                });
                tmp.sort((a, b) => a.name > b.name ? 1 : -1)
                setItems(tmp);
            };
            fetchData();
        }, []);



    var body;
    var buttons;

    function handleClick() {
        if (!width) {
            setWidthError(true);
            return;
        }
        if (!length) {
            setLengthError(true);
            return;
        }
        if (currentStep === 3) {
            setCurrentStep(1)
        }
        setCurrentStep(currentStep + 1)
    }

    function handleClickBack() {
        setCurrentStep(currentStep - 1)
    }

    if (currentStep === 1) {
        body = <Form width={width} setWidth={setWidth}
            length={length} setLength={setLength}
            insolationValue={insolationValue} setInsolationValue={setInsolationValue}
            widthError={widthError} setWidthError={setWidthError}
            lengthError={lengthError} setLengthError={setLengthError}
        />
        buttons = <Button className={classes.button} variant="contained" color="primary" onClick={() => handleClick()}>Kontynuuj</Button>
    }
    else if (currentStep === 2) {
        body = <SelectVegetables items={items} setItems={setItems} />
        buttons = (
            <>
                <Button className={classes.button} variant="outlined" onClick={() => handleClickBack()}>Cofnij</Button>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => handleClick()}>Kontynuuj</Button>
            </>)
    }

    return (
        <>
            {body}
            <Container className={classes.container} align="center">
                {buttons}
            </Container>

        </>
    )
}