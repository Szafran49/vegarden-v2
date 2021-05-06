import { useAuth } from '../../contexts/AuthContexts'
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Tooltip } from '@material-ui/core';

export default function DeleteProject({ projectId }) {
    const { deleteUserProject } = useAuth()

    function handleProjectDelete(projectId, event) {
        event.stopPropagation();
        deleteUserProject(projectId)
    }

    return (
        <Tooltip title="Usuń">
            <Button
                onClick={(event) => handleProjectDelete(projectId, event)}
            >
                <DeleteIcon />
            </Button>
        </Tooltip>
    )
}
