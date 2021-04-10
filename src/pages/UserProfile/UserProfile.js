import { Container, Typography } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContexts'
import { makeStyles } from '@material-ui/core/styles'
import { useEffect, useState } from 'react';
import { firestore } from '../../data/firebase'
const useStyles = makeStyles((theme) => ({

}));


export default function UserProfile() {
    const classes = useStyles();
    const [projects, setProjects] = useState([])
    const { currentUser, getUserProjects } = useAuth()

    useEffect(function loadData() {
        const fetchData = async () => {

            const tmp = [];
            const data = await firestore
                .collection('Users')
                .doc('norem0rse@interia.pl')
                .collection('Standard')
                .get()
            console.log(data)
            // data.docs.forEach(async (doc) => {
            //     tmp.push({ id: doc.id, ...doc.data() });
            // });

            setProjects(tmp)
            // data.forEach(doc => {
            //     console.log(doc.id, '=>', doc.data());
            // });
        };
        if (currentUser != null) {
            fetchData();
        }
    }, [currentUser]);

    return (
        <>
            <Container maxWidth="md">
                <Typography>Projekty</Typography>
                {projects.map(project => (
                    <li>{project.id}</li>
                ))}
            </Container>
        </>
    )
}