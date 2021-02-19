import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SelectedVegetables from "./SelectedVegetables";
<<<<<<< Updated upstream:src/components/VegetableSelector.js
import { db } from "../data/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
=======
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
>>>>>>> Stashed changes:src/pages/SelectVegetables/VegetableSelector.js
  gridList: {
    width: 1000,
    height: 600,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  header: {
    fontSize: "40px",
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


<<<<<<< Updated upstream:src/components/VegetableSelector.js
  useEffect(function loadData() {
    const fetchData = async () => {
      const vegetables = await db.collection("Vegetables").get();
      const tmp = [];
      vegetables.docs.map(async (doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setData(tmp);
    };
    fetchData();
  }, []);

  function handleClick(item) {
    toggleSelectedData((selectedData) => [...selectedData, item]);
  }

  function deleteSelectedItem(id) {
    console.log(id);
    toggleSelectedData((selectedData) =>
=======
  useEffect(
    function updateRecommendation() {
      var matchedItems = [];
      selectedItems.map(item => item.likesArray.map(it => {
        for (let i = 0; i < items.length; i++) {
          if (it === items[i].id) {
            matchedItems.push(items[i]);
          }
        }
      }))
      setRecommendedItems([...matchedItems])
    }, [selectedItems]);

  function findItem(item) {
    return selectedItems.some(el => el.id === item.id)
  }

  function handleClick(item) {
    console.log(item);
    const founded = findItem(item);
    if (!founded) {
      setSelectedItems((selectedItems) => [...selectedItems, item]);
    }
  }

  function deleteSelectedItem(id) {
    setSelectedItems((selectedData) =>
>>>>>>> Stashed changes:src/pages/SelectVegetables/VegetableSelector.js
      selectedData.filter((item) => item.id !== id)
    );
  }

  return (
    <>
<<<<<<< Updated upstream:src/components/VegetableSelector.js
      <h1 style={{ textAlign: "center" }}>
        Krok 3. Jakie warzywa chcesz zasadzić?
      </h1>
      <div className={classes.root}>
=======
      <Typography variant="h4" align="center">
        Wybierz warzywa do zasadzenia
        </Typography>
      <StyledContainer>
>>>>>>> Stashed changes:src/pages/SelectVegetables/VegetableSelector.js
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
<<<<<<< Updated upstream:src/components/VegetableSelector.js

        {selectedData && (
=======
        {selectedItems && (
>>>>>>> Stashed changes:src/pages/SelectVegetables/VegetableSelector.js
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
// <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
//   <ListSubheader component="div" className={classes.header}>
//     Warzywa
//   </ListSubheader>
// </GridListTile>;
