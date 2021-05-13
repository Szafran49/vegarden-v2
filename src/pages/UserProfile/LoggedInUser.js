import { Container, Typography, List, ListItem, ListItemText, } from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContexts";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import DeleteProject from './DeleteProject'
import EditProject from "./EditProject";

const useStyles = makeStyles(() => ({
  listItem: {
    boxSizing: "border-box",
    height: 50,
    borderBottom: "1px solid black",
    "&:hover": {
      cursor: "pointer",
      borderBottom: "3px solid black",
    }
  }
}));

export default function LoggedInUser() {
  const [projects, setProjects] = useState([]);
  const [isEdited, toggleEdit] = useState(false);
  const [activeProject, setActiveProject] = useState()
  const [vegetables, setVegetables] = useState([])
  const { currentUser, getUserProjects, getVegetables } = useAuth();
  const classes = useStyles();

  useEffect(
    function loadProjectsForCurrentUser() {
      const fetchUserData = async () => {
        const data = await getUserProjects();
        setProjects(data);
      };
      const fetchVegetables = async () => {
        const data = await getVegetables();
        setVegetables(data);
      }
      if (currentUser != null) {
        fetchUserData();
        fetchVegetables();
      }
    }, []);

  function handleProjectChoose(project) {
    setActiveProject(project)
    toggleEdit(true);
  }

  return (
    <Container maxWidth="md" align="center">
      {isEdited ?
        <EditProject project={activeProject} vegetables={vegetables} toggleEdit={toggleEdit} />
        :
        <>
          <Typography variant="h5">Twoje projekty</Typography>
          <List style={{ width: "60%" }}>
            {projects.map((project) => (
              <ListItem
                key={project.id}
                onClick={() => handleProjectChoose(project)}
                className={classes.listItem}
              >
                <ListItemText primary={project.id} />
                <DeleteProject projectId={project.id} />
              </ListItem>
            ))}
          </List>
        </>
      }
    </Container>
  );
}
