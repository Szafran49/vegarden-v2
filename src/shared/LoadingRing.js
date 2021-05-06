import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
    '@keyframes loading': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        }
    },
    loadingRing: {
        display: 'inline-block',
        width: 25,
        height: 25,
        '&::after': {
            content: '""',
            display: 'block',
            width: 18,
            height: 18,
            margin: 5,
            border: '3px solid black',
            borderRadius: '50%',
            borderColor: '#fff transparent #fff transparent',
            animation: '$loading 1.2s linear infinite',
        },
    },
}));

export default function LoadingRing() {
    const classes = useStyles();
    return (
        <div className={classes.loadingRing}></div>
    );
}
