import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    primary: {
        green: "#57BC90",
        blue: "#77C9D4",
        darkGreen: "#015249",
        grey: "#A5A5AF",
    },
    palette: {
        primary: {
            main: "#57BC90",
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: 'Akaya Telivigala, cursive',
    },
});

export default theme;