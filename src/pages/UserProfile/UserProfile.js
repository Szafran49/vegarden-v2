import { Container, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContexts'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));



export default function UserProfile() {
    const classes = useStyles();
    const { currentUser } = useAuth()

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh' }} />
            </Container>
        </>
    )
}