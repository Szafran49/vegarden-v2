import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from "react-router";
import gardenTypes from './GardenTypes'


const useStyles = makeStyles((theme) => ({
    gridList: {
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",

    },
    img: {
        height: "auto",
        width: "100%",
    },
    header: {
        padding: theme.spacing(1)
    },
    tile: {
        cursor: "pointer",

    },
    tileBar: {
        textAlign: "center"
    },
    container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "red"

    }
}));

export default function SelectGardenType() {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <>
            <Typography variant="h4" align="center" className={classes.header}>Wybierz typ ogródka warzywnego</Typography>
            <div>
                <GridList className={classes.gridList} cellHeight={300} cols={3}>
                    {gardenTypes.map((tile) => (
                        <GridListTile key={tile.img} onClick={() => navigate(tile.href)} className={classes.tile}>
                            <img src={tile.img} alt={tile.title} className={classes.img} />
                            <GridListTileBar
                                title={tile.title}
                                className={classes.tileBar}

                            />
                        </GridListTile>
                    ))}

                </GridList>
            </div>
        </>
    )
} 