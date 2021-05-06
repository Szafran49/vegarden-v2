import Field from "../../CreateGarden/Creator/Field";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useAuth } from "../../../contexts/AuthContexts";
import { Button, Container } from "@material-ui/core";

export default function EditProject() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);
  const [width, setWidth] = useState();
  const { currentUser, getUserProject, getVegetables } = useAuth();
  const { slug: projectName } = useParams();

  useEffect(function loadData() {
    const fetchData = async () => {
      const vegetables = await getVegetables();
      const project = await getUserProject(projectName);
      setItems(vegetables);
      setSelectedItems(project.vegetables);
      setWidth(project.projectWidth);
    };
    if (currentUser != null) {
      fetchData();
    }
  }, []);

  return (
    <Container maxWidth="md" align="center">
      <Field
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        fieldWidth={width}
        items={items}
      />
      <Button variant="contained" size="large">
        Zapisz
      </Button>
    </Container>
  );
}
