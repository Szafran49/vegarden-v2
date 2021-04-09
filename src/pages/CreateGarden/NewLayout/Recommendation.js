import { Tooltip, Typography } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  informationContainer: {
    position: "relative",
  },
  information: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
  },
}));

export default function Recommendation({ recommendation }) {
  const classes = useStyles();

  const recommendationList = recommendation.map((item) => {
    return (
      <ul style={{ fontSize: 16 }}>
        <li>{item}</li>
      </ul>
    );
  });
  console.log(recommendationList);

  return (
    <div className={classes.informationContainer}>
      <Tooltip
        arrow
        title={
          <>
            <Typography>
              Obok tego warzywa warto zasadzić takie warzywa jak:
            </Typography>
            {recommendationList}
          </>
        }
        style={{ fontSize: 40 }}
      >
        <HelpIcon
          color="primary"
          style={{
            background: "white",
            borderRadius: "50%",
            marginTop: 10,
            fontSize: 40,
          }}
        />
      </Tooltip>
    </div>
  );
}
