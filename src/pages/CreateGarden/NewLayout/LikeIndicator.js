import { Tooltip } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  rightArrow: {
    display: "block",
    color: "rgb(68, 242, 29)",
    fontSize: 50,
    cursor: "pointer",
    zIndex: 123,
    borderRadius: "50%",
    transform: "rotatex(180deg)",
  },
  leftArrow: {
    display: "block",
    color: "rgb(68, 242, 29)",
    fontSize: 50,
    cursor: "pointer",
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

export default function LikeIndicator({ left, right, recommendation }) {
  const classes = useStyles();
  return (
    <div style={{ position: "relative" }}>
      {left ? (
        <>
          <Tooltip
            title={`Obok tego warzywa najlpiej zasadzić: ${recommendation}`}
            placement="right"
          >
            <div className={classes.leftArrowContainer}>
              <ArrowForwardIcon className={classes.leftArrow} />
              <ArrowForwardIcon className={classes.leftArrow} />
              <ArrowForwardIcon className={classes.leftArrow} />
              <ArrowForwardIcon className={classes.leftArrow} />
            </div>
          </Tooltip>
        </>
      ) : null}

      {right ? (
        <Tooltip title="TODO" placement="left">
          <div className={classes.rightArrowContainer}>
            <ArrowForwardIcon className={classes.rightArrow} />
            <ArrowForwardIcon className={classes.rightArrow} />
            <ArrowForwardIcon className={classes.rightArrow} />
            <ArrowForwardIcon className={classes.rightArrow} />
          </div>
        </Tooltip>
      ) : null}
    </div>
  );
}
