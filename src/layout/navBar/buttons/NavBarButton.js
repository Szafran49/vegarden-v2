import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    minWidth: 130,
    overflow: "hidden",
    "&:hover": {
      boxShadow: `5px -5px ${theme.colors.darkGreen}`,
    },
    "&::before": {
      content: '""',
      background: 'white',
      transition: 'background 0.5s',
    }
  },
}));

export default function NavBarButton({ children, ...props }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      type="submit"
      variant="outlined"
      {...props}
    >
      {children}
    </Button>
  );
}
