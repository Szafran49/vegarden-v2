import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    width: 130,
    maxHeight: "1%",
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
    },
    "&:hover": {
      backgroundColor: "white",
      boxShadow: `5px -5px ${theme.colors.darkGreen}`,
    },
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
