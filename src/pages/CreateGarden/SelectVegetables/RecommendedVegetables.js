import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from "../../../shared/StyledIconButton";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
    list: {
        maxHeight: '67vh',
        overflowY: 'auto'
    },
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 260,
        fontSize: theme.typography.pxToRem(16),
        border: '1px solid #dadde9',
    },
}));


export default function RecommendedVegetables({ recommendedItems, addItem }) {

    const classes = useStyles()

    function handleClick(item) {
        addItem(item)
    }
    const tooltipTitle = <Typography align="center">Rekomendowane warzywa wybierane są na podstawie uprawie współrzędnej warzyw.</Typography>

    return (
        <>
            <Grid xs={2} md={2}>
                <Tooltip title={tooltipTitle} className={classes.tooltip}>
                    <Typography align="center">Rekomendowane warzywa </Typography>
                </Tooltip>
                <List className={classes.list}>
                    {recommendedItems.map((item) => {
                        return (
                            <ListItem key={item.id}>
                                <ListItemAvatar>
                                    <Avatar alt={item.id} src={item.image} />
                                </ListItemAvatar>
                                <ListItemText id={item.id}
                                    primary={item.name} />
                                <ListItemSecondaryAction>
                                    <IconButton variant='contained' onClick={() => handleClick(item)} >
                                        <AddIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>)
                    })}
                </List>
            </Grid>
        </>
    )
}