import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.colors.green,
    transition: "color 0.2s 0.1s ease-out",
    background: "transparent",
    "&:hover": {
      color: theme.colors.darkGreen,
    }
  }
}));

const StyledIconButton = (props) => {
  const classes = useStyles()
  return <IconButton className={classes.icon} {...props} />
}

export default StyledIconButton