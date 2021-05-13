import Field from "../CreateGarden/Creator/Field";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContexts";
import { Button, Container } from "@material-ui/core";
import LoadingRing from '../../shared/LoadingRing'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    minWidth: 125,
  },
  buttonBody: {
    marginRight: theme.spacing(1),
  }
}));

export default function EditProject({ project, vegetables, toggleEdit }) {
  const classes = useStyles()
  const [selectedItems, setSelectedItems] = useState(project.vegetables);
  const [buttonBody, setButtonBody] = useState("Zapisz");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUserProject } = useAuth();

  function handleClick() {
    setIsLoading(true)
    updateUserProject(selectedItems, project.id)
      .then(
        () => {
          setIsLoading(false)
          setButtonBody("Zapisano!")
          setTimeout(() => setButtonBody("Zapisz"), 3000)
        }
      )
      .catch(function (error) {
        alert(error)
      }
      )
  }

  return (
    <Container maxWidth="md" align="center">
      <Field
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        fieldWidth={project.projectWidth}
        items={vegetables}
      />
      <Button variant="contained" size="large" onClick={() => toggleEdit(false)}>Cofnij</Button>
      <Button variant="contained" size="large" onClick={() => handleClick()} className={classes.button}>
        {isLoading ? <LoadingRing /> : <span className={classes.buttonBody}>{buttonBody}</span>}
      </Button>
    </Container>
  );
}
