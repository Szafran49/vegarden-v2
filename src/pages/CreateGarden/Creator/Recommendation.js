import { Tooltip, Typography } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  informationContainer: {
    position: "relative",
  },
  tooltip: {
    fontSize: 40,
  },
  helpIcon: {
    background: theme.colors.green,
    color: 'white',
    borderRadius: "50%",
    marginTop: 10,
    fontSize: 40,
  },
}));

export default function Recommendation({ recommendation }) {
  const classes = useStyles();

  const recommendationList = recommendation.map((item) => {
    return (
      <ul style={{ fontSize: 16 }} key={item}>
        <li>{item}</li>
      </ul>
    );
  });

  return (
    <div className={classes.informationContainer}>
      <Tooltip
        arrow
        className={classes.tooltip}
        title={
          <>
            <Typography>
              Obok tego warzywa warto zasadzić takie warzywa jak:
            </Typography>
            {recommendationList}
          </>
        }
      >
        <HelpIcon
          className={classes.helpIcon}
        />
      </Tooltip>
    </div>
  );
}
