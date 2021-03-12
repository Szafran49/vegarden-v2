import { Button, Container, Input } from '@material-ui/core'
import { useEffect, useState } from 'react'

export default function SelectVegetables({ items, selectedItems, setSelectedItems, width }) {

    const [mousePosition, setMousePosition] = useState({ x: null });
    const [itemWidth, setItemWidth] = useState(10)




    return (
        <Container maxWidth="md" align="center">
            <div style={{ display: "flex", border: '1px dotted black', minHeight: "300px", outline: "10px solid brown", marginTop: "100px" }}>
                <div style={{ border: "2px solid black", width: `${itemWidth}px` }} ></div>
            </div>
            <p>Szerokość powierzchni - {width} cm<sup>2</sup></p>
            <p>{mousePosition.x}</p>
        </Container>
    )
}