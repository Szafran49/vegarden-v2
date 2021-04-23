import Field from '../../CreateGarden/Creator/Field'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { useAuth } from '../../../contexts/AuthContexts';

export default function EditProject() {
    const [selectedItems, setSelectedItems] = useState()
    const [project, setProject] = useState([])
    const [items, setItems] = useState()
    const { currentUser, getUserProject, getVegetables } = useAuth()
    const { projectName } = useParams();

    useEffect(function loadVegetables() {
        const fetchData = async () => {
            const vegetables = await getVegetables()
            setItems(vegetables);
        };
        if (currentUser != null) {
            fetchData();
        }
    }, []);

    useEffect(function loadSelectedItems() {
        setSelectedItems(project.vegetables)
    }, [])

    useEffect(function loadProject() {
        const fetchData = async () => {
            const data = await getUserProject(projectName)
            setProject(data)
        };
        if (currentUser != null) {
            fetchData();
        }
    }, []);


    console.log(project)


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