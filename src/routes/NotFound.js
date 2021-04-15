import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography'

export default function NotFound() {
    return (
        <Container maxWidth="md" align="center">
            <Typography variant="h6">Nie znaleziono podanej strony</Typography>
        </Container>
    )
}