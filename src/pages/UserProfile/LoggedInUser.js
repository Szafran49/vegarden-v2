import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Tooltip,
} from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContexts";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useNavigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  listItem: {},
}));

export default function LoggedInUser() {
  const [projects, setProjects] = useState([]);
  const { currentUser, getUserProjects } = useAuth();
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(
    function loadProjectsForCurrentUser() {
      const fetchData = async () => {
        const data = await getUserProjects();
        setProjects(data);
      };
      if (currentUser != null) {
        fetchData();
      }
    },
    [currentUser]
  );

  function handleProjectChoose(project) {
    navigate(`project/${project.id}`);
  }

  function handleProjectDelete(project, event) {
    event.stopPropagation();
    alert("uwaga! usuwam!");
  }

  return (
    <>
      <Container maxWidth="md" align="center">
        <Typography variant="h5">Twoje projekty</Typography>
        <List style={{ width: "60%" }}>
          {projects.map((project) => (
            <ListItem
              button
              onClick={() => handleProjectChoose(project)}
              className={classes.listItem}
            >
              <ListItemText primary={project.id} />
              <Tooltip title="Usuń">
                <Button
                  onClick={(event) => handleProjectDelete(project, event)}
                >
                  <DeleteIcon />
                </Button>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
