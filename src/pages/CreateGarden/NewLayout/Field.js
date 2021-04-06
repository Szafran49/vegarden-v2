import { Container, Typography } from "@material-ui/core";
import IconButton from "../../../shared/StyledIconButton";
import AddIcon from "@material-ui/icons/Add";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Vegetables from "./Vegetables";
import Column from "./Column";
import ColumnLayout from "./ColumnLayout";
import Alert from "./Alert";
import LikeIndicator from "./LikeIndicator";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(1),
  },

  rowsContainer: {
    display: "flex",
    minHeight: 400,
    outline: "10px solid brown",
    marginTop: 100,
    width: 900,
    backgroundColor: "white",
  },

  add: {
    position: "relative",
    left: 0,
    top: 0,
    bottom: 0,
    color: "black",
    maxWidth: 40,
    maxHeight: 40,
    border: "1px solid black",
  },

  remainingSpaceDescription: {
    position: "relative ",
    display: "flex",
    height: 70,
    top: -79,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },

  remainingSpace: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "center",
  },
}));

export default function Field({
  selectedItems,
  setSelectedItems,
  fieldWidth,
  items,
}) {
  const [remainingSpace, setRemainingSpace] = useState(fieldWidth);
  const [isVegetablesVisible, setIsVegetablesVisible] = useState(false);
  const [isVegetablesForEditVisible, setIsVegetablesForEditVisible] = useState(
    false
  );
  const [rowToChange, setRowToChange] = useState(null);
  const [widthAlert, setWidthAlert] = useState(false);
  const [vegetableRelationships, setVegetableRelationships] = useState([]);
  const classes = useStyles();

  useEffect(
    function updateRemainingSpace() {
      let sumWidths = 0;
      selectedItems.map((item) => (sumWidths += item.width));
      sumWidths = fieldWidth - sumWidths;
      setRemainingSpace(sumWidths);
    },
    [selectedItems, fieldWidth]
  );

  // useEffect(
  //   function updateVegetableRelationships() {
  //     const template = {
  //       left: false,
  //       right: false,
  //     };
  //     let tmp = [];
  //     for (let i = 0; i < selectedItems.length; i++) {
  //       tmp.push(template);
  //     }
  //     if (selectedItems.length >= 2) {
  //       const data = selectedItems;
  //       for (let i = 0; i < selectedItems.length - 1; i++) {
  //         if (data[i].likesArray.includes(data[i + 1].id)) {
  //           tmp[i].right = true;
  //         } else {
  //           tmp[i].right = false;
  //         }
  //       }
  //       for (let i = selectedItems.length - 1; i > 0; i--) {
  //         if (data[i].likesArray.includes(data[i - 1].id)) {
  //           tmp[i].left = true;
  //         } else {
  //           tmp[i].left = false;
  //         }
  //       }
  //     }
  //     setVegetableRelationships(tmp);
  //   },
  //   [selectedItems, fieldWidth]
  // );

  function checkLeftSideRelationShip(index) {
    if (index === 0) {
      return false;
    }
    if (selectedItems[index].likesArray.includes(selectedItems[index - 1].id)) {
      return true;
    }
    return false;
  }

  function checkRightSideRelationShip(index) {
    if (index === selectedItems.length - 1) {
      return false;
    }
    if (selectedItems[index].likesArray.includes(selectedItems[index + 1].id)) {
      return true;
    }
    return false;
  }

  console.log(selectedItems);
  console.log(vegetableRelationships);
  function changeVegetablesDisplay() {
    setIsVegetablesVisible(!isVegetablesVisible);
  }

  function handleVegetableForEditDisplayChange(index) {
    setRowToChange(index);
    setIsVegetablesForEditVisible(!isVegetablesForEditVisible);
  }

  function addToSelectedItems(item) {
    let initialWidthValue = 10;
    if (remainingSpace < 10) {
      initialWidthValue = remainingSpace;
      setRemainingSpace(0);
    }
    const newItem = (({ id, image, likesArray }) => ({
      id,
      image,
      likesArray,
    }))(item);
    newItem.width = initialWidthValue;
    setSelectedItems((selectedItems) => [...selectedItems, newItem]);
    changeVegetablesDisplay();
  }

  function handleVegetableChange(item, index) {
    let data = [...selectedItems];
    item.width = selectedItems[rowToChange].width;
    data[index] = item;
    console.log(item);
    setSelectedItems(data);
    handleVegetableForEditDisplayChange(null);
  }

  function handleVegetableDelete(index) {
    const data = [...selectedItems];
    data.splice(index, 1);
    setSelectedItems(data);
  }

  function handleVegetableWidthChange(index, desiredWidth) {
    const width = parseInt(desiredWidth);
    const data = [...selectedItems];
    const currentWidth = data[index].width;
    if (width > currentWidth) {
      if (currentWidth + remainingSpace < width) {
        setWidthAlert(true);
        data[index].width += remainingSpace;
        setRemainingSpace(0);
        return;
      }
    }
    data[index].width = width;
    setSelectedItems(data);
    setWidthAlert(false);
  }

  return (
    <Container maxWidth="md" align="center">
      <div className={classes.rowsContainer}>
        {selectedItems.map((item, index) => (
          <ColumnLayout
            width={item.width}
            image={item.image}
            id={item.id}
            key={index}
            fieldWidth={fieldWidth}
          >
            <Column
              handleVegetableDelete={handleVegetableDelete}
              handleVegetableForEditDisplayChange={
                handleVegetableForEditDisplayChange
              }
              handleVegetableWidthChange={handleVegetableWidthChange}
              index={index}
              width={item.width}
              fieldWidth={fieldWidth}
            />
            <LikeIndicator
              left={checkLeftSideRelationShip(index)}
              right={checkRightSideRelationShip(index)}
              recommendation={item.likesArray}
            />
            {isVegetablesForEditVisible ? (
              <Vegetables
                index={rowToChange}
                items={items}
                action={handleVegetableChange}
              />
            ) : null}
          </ColumnLayout>
        ))}
        {remainingSpace > 0 ? (
          <div className={classes.remainingSpaceDescription}>
            <Typography>Pozostałe miejsce</Typography>
            <div className={classes.remainingSpace}>
              <Typography variant="h5">{remainingSpace}</Typography>
              <Typography variant="h7">cm</Typography>
              <IconButton
                onClick={() => changeVegetablesDisplay()}
                className={classes.add}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        ) : null}
        {isVegetablesVisible ? (
          <Vegetables items={items} action={addToSelectedItems} />
        ) : null}
      </div>
      <Typography className={classes.text} variant="h5">
        Szerokość powierzchni - {fieldWidth}cm
      </Typography>
      {widthAlert ? <Alert /> : null}
    </Container>
  );
}
