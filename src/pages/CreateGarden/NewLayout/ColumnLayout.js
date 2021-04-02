import { makeStyles } from '@material-ui/styles'
import { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
    row: {
        display: "flex",
        flexDirection: 'column',
        transition: "all 0.5s",
        backgroundImage: (props) => `url(${props.image})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '20px',
        width: (props) => props.percentageWidth,
        minWidth: 0,
        "&:hover": {
            minWidth: 90,
            "& $div:nth-of-type(2)": {
                opacity: 1,
            }
        },
    },
}));

export default function ColumnLayout({ children, width, image, fieldWidth }) {

    const [percentageWidth, setPercentageWidth] = useState()

    useEffect(function convertCmToPx() {
        let convertedWidth = width * 900 / fieldWidth
        if (convertedWidth < 60) {
            convertedWidth = 60
        }
        setPercentageWidth(convertedWidth)
    }, [width, fieldWidth])


    const classes = useStyles({ percentageWidth, image, width })
    return (
        <div className={classes.row}>
            {children}
        </div>
    )
}