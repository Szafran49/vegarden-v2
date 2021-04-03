import { makeStyles } from '@material-ui/styles'
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Tooltip } from '@material-ui/core';

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
    arrow: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 0,
        marginTop: 10,
        color: 'rgb(68, 242, 29)',
        fontSize: 70,
        cursor: 'pointer',
        zIndex: 123,
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        transform: 'rotateX(180deg)',
    }
}));

export default function ColumnLayout({ children, width, image, fieldWidth }) {

    const [percentageWidth, setPercentageWidth] = useState()
    const classes = useStyles({ percentageWidth, image, width })

    useEffect(function convertCmToPx() {
        let convertedWidth = width * 900 / fieldWidth
        if (convertedWidth < 60) {
            convertedWidth = 60
        }
        setPercentageWidth(convertedWidth)
    }, [width, fieldWidth])


    return (
        <div className={classes.row}>
            {children}
            <Tooltip title='kek'>
                <ArrowForwardIcon className={classes.arrow}>

                </ArrowForwardIcon>
            </Tooltip>
        </div>
    )
}