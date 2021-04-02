import {
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
} from "@material-ui/core";
import IconButton from "../../../shared/StyledIconButton";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 80,
    backgroundColor: "white",
    zIndex: 9999,
  },
  gridList: {
    width: 1000,
    maxHeight: 550,
  },

  header: {
    padding: theme.spacing(1),
  },

  barTitle: {
    overflow: "visible",
    whiteSpace: "normal",
    textAlign: "center",
    fontSize: "0.75rem",
    height: 30,
  },
}));

export default function Vegetables({ items, action, index }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h6">Wybierz warzywo do zasadzenia</Typography>
      <GridList className={classes.gridList}>
        {items.map((item) => (
          <GridListTile key={item.image} cols={0.4} rows={1}>
            <img src={item.image} alt={item.id} />
            <GridListTileBar
              classes={{ title: classes.barTitle }}
              title={item.name}
              actionIcon={
                <IconButton onClick={() => action(item, index)}>
                  <AddIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
