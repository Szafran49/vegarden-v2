import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SelectedVegetables from "./SelectedVegetables";
import { db } from "../data/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
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
  const [data, setData] = useState([]);
  const [selectedData, toggleSelectedData] = useState([]);

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
      selectedData.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Krok 3. Jakie warzywa chcesz zasadzić?
      </h1>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={400}>
          {data.map((item) => (
            <GridListTile key={item.image} cols={0.4} rows={0.5}>
              <img src={item.image} alt={item.id} />
              <GridListTileBar
                title={item.name}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.id}`}
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

        {selectedData && (
          <SelectedVegetables
            selectedItems={selectedData}
            deleteSelectedItem={deleteSelectedItem}
          />
        )}
      </div>
    </>
  );
}
// <GridListTile key="Subheader" cols={1} style={{ height: "auto" }}>
//   <ListSubheader component="div" className={classes.header}>
//     Warzywa
//   </ListSubheader>
// </GridListTile>;
