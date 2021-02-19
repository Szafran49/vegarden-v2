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

const StyledTitle = styled(Typography)`
`

const StyledList = styled(List)`
  height:550px;
  border: 1px solid red;
  overflow-y:auto;
`

export default function SelectedVegetables({
  selectedItems,
  deleteSelectedItem,
}) {

  function handleClick(id) {
    console.log(id);
    deleteSelectedItem(id);
  }

  return (
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
                  <RemoveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>)
        })}
      </StyledList>
    </Grid>
  );
}
