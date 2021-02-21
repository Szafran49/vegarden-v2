import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SelectedVegetables from "./SelectedVegetables";
import RecommendedVegetables from './RecommendedVegetables'
import Typography from '@material-ui/core/Typography'
import { firestore } from "../../data/firebase";
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`
const useStyles = makeStyles(() => ({
  gridList: {
    width: 1000,
    height: 600,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function VegetableSelector() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(
    function loadData() {
      const fetchData = async () => {
        const vegetables = await firestore.collection("Vegetables").get();
        const tmp = [];
        vegetables.docs.map(async (doc) => {
          tmp.push({ id: doc.id, ...doc.data() });
        });
        tmp.sort((a, b) => a.name > b.name ? 1 : -1)
        setItems(tmp);
      };
      fetchData();
    }, []);


  useEffect(
    function updateRecommendation() {
      var matchedItems = [];
      var allItems = []
      selectedItems.forEach(item => item.likesArray.forEach(it => {
        for (let i = 0; i < items.length; i++) {
          if (it === items[i].id) {
            allItems.push(items[i]);
          }
        }
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
      <Typography variant="h4" align="center">
        Wybierz warzywa do zasadzenia
        </Typography>
      <StyledContainer>
        <GridList className={classes.gridList} cellHeight={400}>
          {items.map((item) => (
            <GridListTile key={item.image} cols={0.4} rows={0.5}>
              <img src={item.image} alt={item.id} />
              <GridListTileBar
                title={item.name}
                actionIcon={
                  <IconButton
                    className={classes.icon}
                    onClick={() => handleClick(item)}
                  >
                    <AddIcon />
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
      </StyledContainer>
    </>
  );
}