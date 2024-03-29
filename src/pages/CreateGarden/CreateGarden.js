import Form from "./Form/Form";
import Field from "./Creator/Field";
import SubmitProject from "./Creator/SubmitProject";
import { useState, useEffect } from "react";
import { Button, Container, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../contexts/AuthContexts";
import { firestore } from "../../data/Firebase";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5, 1),
    padding: theme.spacing(1, 3),
  },
}));

export default function CreateGarden() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { saveUserProject, currentUser } = useAuth();
  const [projectName, setProjectName] = useState();
  const [currentStep, setCurrentStep] = useState(0);
  const [width, setWidth] = useState(null);
  const [length, setLength] = useState(null);
  const [widthError, setWidthError] = useState(null);
  const [lengthError, setLengthError] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(function loadData() {
    const fetchData = async () => {
      const vegetables = await firestore.collection("Vegetables").get();
      const tmp = [];
      vegetables.docs.map(async (doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      tmp.sort((a, b) => (a.name > b.name ? 1 : -1));
      setItems(tmp);
    };
    fetchData();
  }, []);

  useEffect(
    function resetAfterFieldWidthChange() {
      setSelectedItems([]);
    },
    [width]
  );

  let body;
  let buttons;

  function handleClickNext() {
    if (!width) {
      setWidthError(true);
      return;
    }
    if (!length) {
      setLengthError(true);
      return;
    }
    if (currentStep === 3) {
      setCurrentStep(1);
    }
    setCurrentStep(currentStep + 1);
  }

  function handleBackToTypeSelect() {
    navigate("../../select-type");
  }

  function handleClickBack() {
    setCurrentStep(currentStep - 1);
  }

  function handleSaveToTheDatabase(projectName) {
    saveUserProject(selectedItems, projectName, width, length);
  }

  if (currentStep === 0) {
    body = (
      <Form
        width={width}
        setWidth={setWidth}
        length={length}
        setLength={setLength}
        widthError={widthError}
        setWidthError={setWidthError}
        lengthError={lengthError}
        setLengthError={setLengthError}
      />
    );
    buttons = (
      <>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => handleBackToTypeSelect()}
        >
          Cofnij
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => handleClickNext()}
        >
          Kontynuuj
        </Button>
      </>
    );
  } else if (currentStep === 1) {
    body = (
      <>
        <Field
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          fieldWidth={width}
          items={items}
        />
      </>
    );
    buttons = (
      <>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => handleClickBack()}
        >
          Cofnij
        </Button>
        {currentUser === null ?

          <Tooltip
            title={
              <Typography style={{ fontSize: 16 }}>
                Musisz się zalogować, aby zapisywać wykonane projekty!
              </Typography>
            }
            placement="right"
          >
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled
            >
              Zapisz
            </Button>
          </Tooltip>
          :
          <SubmitProject
            handleSaveToTheDatabase={handleSaveToTheDatabase}
            setProjectName={setProjectName}
            projectName={projectName}
          />
        }
      </>
    );
  }

  return (
    <>
      {body}
      <Container className={classes.container} align="center">
        {buttons}
      </Container>
    </>
  );
}
