import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

<<<<<<< Updated upstream:src/components/SelectedVegetables.js
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 220,
    height: 220,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));
=======
const StyledTitle = styled(Typography)`
`

const StyledList = styled(List)`
  height:550px;
  border: 1px solid red;
  overflow-y:auto;
`
>>>>>>> Stashed changes:src/pages/SelectVegetables/SelectedVegetables.js

export default function SelectedVegetables({
  selectedItems,
  deleteSelectedItem,
}) {

  function handleClick(id) {
    console.log(id);
    deleteSelectedItem(id);
  }

  return (
<<<<<<< Updated upstream:src/components/SelectedVegetables.js
    <div className={classes.root}>
      {selectedItems.map((item) => (
        <GridList
          style={{ backgroundColor: "white" }}
          cellHeight={200}
          className={classes.gridList}
        >
          <GridListTile cols={2} rows={1}>
            <img src={item.image} alt="testujemy..." />
            <GridListTileBar
              title={item.name}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.id}`}
                  className={classes.icon}
                  onClick={() => handleClick(item.id)}
                >
=======
    <Grid item xs={2} md={2}>
      <StyledTitle variant="h7" align="center">Wybrane warzywa</StyledTitle>
      <StyledList>
        {selectedItems.map((item) => {
          return (
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.id} src={item.image} />
              </ListItemAvatar>
              <ListItemText id={item.id} primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton variant='contained' onClick={() => handleClick(item.id)} >
>>>>>>> Stashed changes:src/pages/SelectVegetables/SelectedVegetables.js
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)
        })}
      </StyledList>
    </Grid>
  );
}
