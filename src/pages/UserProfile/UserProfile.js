import { Container, Typography } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContexts'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

}));


export default function UserProfile() {
    const classes = useStyles();
    const { currentUser } = useAuth()

    return (
        <>
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }} />
            </Container>
        </>
    )
}