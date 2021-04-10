import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useNavigate } from "react-router";
import gardenTypes from './GardenTypes'
import { Container, useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    header: {
        padding: theme.spacing(2)
    },
    addPointer: {
        cursor: "pointer",
    },
}));

export default function SelectGardenType() {
    const classes = useStyles();
    const navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <>
            <Typography variant="h4" align="center" className={classes.header}>Wybierz typ ogródka warzywnego</Typography>
            <Container align="center">
                <GridList cellHeight={300} spacing={50} cols={matches === false ? 2 : 1} rows={matches === false ? 2 : 1}>
                    {gardenTypes.map((tile) => (
                        <GridListTile key={tile.img}  >
                            <img src={tile.img} alt={tile.title} className={classes.addPointer} onClick={() => navigate(tile.href)} />
                            <GridListTileBar
                                title={tile.title}
                                onClick={() => navigate(tile.href)}
                                className={classes.addPointer}
                            />
                        </GridListTile>
                    ))}

                </GridList>
            </Container>
        </>
    )
}