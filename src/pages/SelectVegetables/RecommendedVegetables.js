import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import Tooltip from '@material-ui/core/Tooltip'


const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}))(Tooltip);


export default function RecommendedVegetables({ recommendedItems, addItem }) {

    function handleClick(item) {
        addItem(item)
    }
    const TooltipTitle = <Typography>Rekomendowane warzywa w pewnym stopniu 'lubią się' z wybranymi warzywami.</Typography>

    return (
        <>
            <Grid item xs={2} md={2}>
                <HtmlTooltip title={TooltipTitle} >
                    <Typography variant="h7">Rekomendowane warzywa <HelpSharpIcon fontSize="small" color="grey" /></Typography>
                </HtmlTooltip>
                <List>
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