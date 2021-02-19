import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
const StyledList = styled(List)`
    border:1px solid red;
    height:550px;
    overflow:auto;
`

export default function RecommendedVegetables({ recommendedItems, addItem }) {

    function handleClick(item) {
        addItem(item)
    }


    return (
        <>
            <Grid item xs={2} md={2}>
                <Typography variant="h7">Rekomendowane warzywa</Typography>
                <StyledList>
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
                </StyledList>
            </Grid>
        </>
    )
}