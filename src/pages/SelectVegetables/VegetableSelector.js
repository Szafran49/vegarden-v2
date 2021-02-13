import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import SelectedVegetables from "./SelectedVegetables";
import Typography from '@material-ui/core/Typography'
import { firestore } from "../../data/firebase";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
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
}));

export default function VegetableSelector() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selectedData, toggleSelectedData] = useState([]);

  useEffect(function loadData() {
    const fetchData = async () => {
      const vegetables = await firestore.collection("Vegetables").get();
      const tmp = [];
      vegetables.docs.map(async (doc) => {
        tmp.push({ id: doc.id, ...doc.data() });
      });
      setData(tmp);
    };
    fetchData();
  }, []);

  function handleClick(item) {
    const found = selectedData.some(el => el.id === item.id);
    if (!found) {
      toggleSelectedData((selectedData) => [...selectedData, item]);
    }
  }

  function deleteSelectedItem(id) {
    toggleSelectedData((selectedData) =>
      selectedData.filter((item) => item.id !== id)
    );
  }

  return (
    <>
      <Typography variant="h4" align="center">
        Wybierz warzywa do zasadzenia
        </Typography>
      <div className={classes.container}>
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