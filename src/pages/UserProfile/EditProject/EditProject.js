import { makeStyles } from '@material-ui/styles'
import Field from '../../CreateGarden/Creator/Field'
import { useState, useEffect } from 'react'
import { firestore } from '../../../data/firebase'

const useStyles = makeStyles(() => ({

}));

export default function EditProject({ project }) {
    const [selectedItems, setSelectedItems] = useState(project.vegetables)
    const [items, setItems] = useState()
    const classes = useStyles()

    useEffect(function loadData() {
        const fetchData = async () => {
            const vegetables = await firestore.collection("Vegetables").get();
            const tmp = [];
            vegetables.docs.map(async (doc) => {
                tmp.push({ id: doc.id, ...doc.data() });
            });
            tmp.sort((a, b) => (a.name > b.name ? 1 : -1));
            setItems(tmp);
        };
        fetchData();
    }, []);

    useEffect(function updateVegetables() {
        setSelectedItems(project.vegetables)
    }, [project])



    console.log(items)
    console.log(selectedItems)
    return (
        <>
            {items ?
                <Field
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                    fieldWidth={project.projectWidth}
                    items={items}
                />
                : null}
        </>
    )
}