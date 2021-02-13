import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid red",
    width: "300px",
    maxHeight: "600px",
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
  container: {
    height: "300px",
    width: "300px",
    border: "1px solid red",
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
    <div className={classes.root}>
      {selectedItems.map((item) => (
        <GridList
          style={{ backgroundColor: "white" }}
          cellHeight={200}
          className={classes.gridList}
        >
          <GridListTile cols={0} rows={0}>
            <GridListTileBar
              title={item.name}
              actionIcon={
                <IconButton
                  aria-label={`info about ${item.id}`}
                  className={classes.icon}
                  onClick={() => handleClick(item.id)}
                >
                  <RemoveIcon />
                </IconButton>
              }
            />
          </GridListTile>
        </GridList>
      ))}
    </div>
  );
}
