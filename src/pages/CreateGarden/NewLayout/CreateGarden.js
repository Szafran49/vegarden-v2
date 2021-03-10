import { Button, Container } from '@material-ui/core'
import { useState } from 'react'

export default function CreateGarden() {
    const [rowNumber, setRowNumber] = useState(0)

    let body = ["hej", "piękna", "co", "tam?"]

    function handleAddButton() {
        setRowNumber(rowNumber + 1)
    }

    function handleDeleteButton() {
        setRowNumber(rowNumber - 1)
    }

    return (
        <Container maxWidth="md" align="center">
            <Button onClick={() => handleDeleteButton()}>-</Button>
            <Button onClick={() => handleAddButton()}>+</Button>
            {rowNumber}
            <div style={{ display: "flex", border: '1px dotted black', minHeight: "300px", }}>
                {body.map((item, index) => {
                    if (index < rowNumber) {
                        return <div key={item} style={{ backgroundColor: "yellow", border: "1px solid black", width: "25%", height: "300px", boxSizing: "border-box" }}>
                            {item}
                        </div>
                    }
                })}
            </div>
        </Container>
    )
}