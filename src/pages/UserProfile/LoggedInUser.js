import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useAuth } from "../../contexts/AuthContexts";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import DeleteProject from './DeleteProject'

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
    [currentUser, projects]
  );

  function handleProjectChoose(project) {
    navigate(`project/${project.id}`);
  }

  return (
    <>
      <Container maxWidth="md" align="center">
        <Typography variant="h5">Twoje projekty</Typography>
        <List style={{ width: "60%" }}>
          {projects.map((project) => (
            <ListItem
              onClick={() => handleProjectChoose(project)}
              className={classes.listItem}
            >
              <ListItemText primary={project.id} />
              <DeleteProject projectId={project.id} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
