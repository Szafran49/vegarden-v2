import { Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  rightArrow: {
    display: "block",
    color: "rgb(68, 242, 29)",
    fontSize: 50,
    zIndex: 123,
    borderRadius: "50%",
  },
  leftArrow: {
    display: "block",
    color: "rgb(68, 242, 29)",
    fontSize: 50,
    zIndex: 123,
    borderRadius: "50%",
    transform: "rotate(180deg)",
  },

  rightArrowContainer: {
    position: "absolute",
    minHeight: "50%",
    marginLeft: "auto",
    right: 0,
    marginTop: 10,
  },
  leftArrowContainer: {
    position: "absolute",
    minHeight: "50%",
    marginLeft: 0,
    margin: "auto",
    marginTop: 10,
  },
}));

export default function LikeIndicator({ left, right }) {
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }}>
      {left ? (
        <div className={classes.leftArrowContainer}>
          <ArrowForwardIcon className={classes.leftArrow} />
          <ArrowForwardIcon className={classes.leftArrow} />
          <ArrowForwardIcon className={classes.leftArrow} />
          <ArrowForwardIcon className={classes.leftArrow} />
        </div>
      ) : null}
      {right ? (
        <div className={classes.rightArrowContainer}>
          <ArrowForwardIcon className={classes.rightArrow} />
          <ArrowForwardIcon className={classes.rightArrow} />
          <ArrowForwardIcon className={classes.rightArrow} />
          <ArrowForwardIcon className={classes.rightArrow} />
        </div>
      ) : null}
    </div>
  );
}
