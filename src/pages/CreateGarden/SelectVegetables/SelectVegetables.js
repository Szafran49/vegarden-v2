import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "../../../shared/StyledIconButton";
import AddIcon from "@material-ui/icons/Add";
import SelectedVegetables from "./SelectedVegetables";
import RecommendedVegetables from './RecommendedVegetables'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: 1000,
    height: "72vh",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  header: {
    padding: theme.spacing(1)
  },
  barTitle: {
    overflow: "visible",
    whiteSpace: "normal",
    minHeight: "30px",
    textAlign: "center",
  },
}));

export default function SelectVegetables({ items, selectedItems, setSelectedItems }) {
  const classes = useStyles();
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(
    function updateRecommendation() {
      var matchedItems = []
      var allItems = []
      selectedItems.forEach(item => item.likesArray.forEach(it => {
        for (let i = 0; i < items.length; i++) {
          if (it === items[i].id) {
            matchedItems.push(items[i]);
          }
        }
        //TODO ITEMS PROPER MAPPING
      }))
      setRecommendedItems([...matchedItems])
    }, [selectedItems]);

  function findItem(item) {
    return selectedItems.some(el => el.id === item.id)
  }

  function handleClick(item) {
    const founded = findItem(item);
    if (!founded) {
      setSelectedItems((selectedItems) => [...selectedItems, item]);
    }
  }

  function deleteSelectedItem(id) {
    setSelectedItems((selectedData) =>
      selectedData.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" className={classes.header}>
        Wybierz warzywa do zasadzenia
        </Typography>
      <div className={classes.container}>
        <GridList className={classes.gridList} cellHeight={400}>
          {items.map((item) => (
            <GridListTile key={item.image} cols={0.4} rows={0.5}
              classes={{ tile: classes.tile }}
            >
              <img src={item.image} alt={item.id} />
              <GridListTileBar
                classes={{ title: classes.barTitle }}
                title={item.name}
                actionIcon={
                  <IconButton
                    colorReverse
                    onClick={() => handleClick(item)}
                  >
                    <AddIcon className={classes.addIcon} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
        {selectedItems && (
          <SelectedVegetables
            selectedItems={selectedItems}
            deleteSelectedItem={deleteSelectedItem}
          />
        )}
        <RecommendedVegetables recommendedItems={recommendedItems} addItem={handleClick} />
      </div>
    </>
  );
}