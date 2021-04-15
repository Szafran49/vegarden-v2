import { Container, GridList, GridListTileBar, Typography, GridListTile } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContexts'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react';
import EditProject from './EditProject/EditProject'

const useStyles = makeStyles((theme) => ({

}));

export default function LoggedInUser() {
    const [projects, setProjects] = useState([])
    const [activeProject, setActiveProject] = useState(null)
    const { currentUser, getUserProjects } = useAuth()

    useEffect(function loadData() {
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

    function handleClick(project) {
        setActiveProject(project)
    }
    console.log(activeProject)

    return (
        <>
            <Container maxWidth="md" align='center'>
                <Typography>
                    Twoje projekty
                </Typography>
                <GridList
                    cellHeight={300}
                    spacing={50}
                    cols={5}
                    rows={5}
                >
                    {projects.map((project, index) => (
                        <GridListTile key={index} >
                            <GridListTileBar
                                title={project.id}
                                onClick={() => handleClick(project)}
                            />
                        </GridListTile>))}
                </GridList>
            </Container>
            {activeProject !== null
                ? <EditProject project={activeProject} />
                : null}
        </>
    )
}