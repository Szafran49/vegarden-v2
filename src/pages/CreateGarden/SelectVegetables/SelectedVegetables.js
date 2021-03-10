import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "../../../shared/StyledIconButton";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: '67vh',
    overflowY: 'auto'
  },
  header: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
}));


export default function SelectedVegetables({
  selectedItems,
  deleteSelectedItem,
}) {
  const classes = useStyles();

  function handleClick(id) {
    deleteSelectedItem(id);
  }

  return (
    <Grid item xs={2} md={2}>
      <Typography align="center" className={classes.header}>Wybrane warzywa</Typography>
      <List className={classes.list}>
        {selectedItems.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.id} src={item.image} />
              </ListItemAvatar>
              <ListItemText id={item.id} primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton variant='contained' onClick={() => handleClick(item.id)} >
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)
        })}
      </List>
    </Grid>
  );
}