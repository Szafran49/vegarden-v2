import { Container, Typography, List, ListItem, ListItemText, IconButton } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContexts'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react';
import EditProject from './EditProject/EditProject'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    listItem: {
    }
}));

export default function LoggedInUser() {
    const [projects, setProjects] = useState([])
    const [activeProject, setActiveProject] = useState(null)
    const { currentUser, getUserProjects } = useAuth()
    const classes = useStyles()
    useEffect(function loadProjectsForCurrentUser() {
        const fetchData = async () => {
            const data = await getUserProjects()
            setProjects(data)
        };
        if (currentUser != null) {
            fetchData();
        }
    }, [currentUser]);

    useEffect(function changeProject() {
    }, [activeProject])

    function handleProjectChoose(project) {
        setActiveProject(project)
    }

    function handleProjectDelete(project, event) {
        event.stopPropagation()
        alert('uwaga! usuwam!')
    }

    return (
        <>
            <Container maxWidth="md" align='center'>
                <Typography variant="h5">
                    Twoje projekty
                </Typography>
                <List style={{ width: '60%' }}>
                    {projects.map((project) => (
                        <ListItem button
                            onClick={() => handleProjectChoose(project)}
                            className={classes.listItem}
                        >
                            <ListItemText
                                primary={project.id}
                            />
                            <DeleteIcon
                                onClick={(event) => handleProjectDelete(project, event)}
                            />
                        </ListItem>
                    ))}
                </List>
            </Container>
            { activeProject !== null
                ? <EditProject project={activeProject} />
                : null}
        </>
    )
}
