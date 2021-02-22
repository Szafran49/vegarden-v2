import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContexts'
export default function UserProfileButton() {

    const { currentUser } = useAuth()
    const navigate = useNavigate();

    function handleClick() {
        navigate(`profile/${currentUser.uid}`)
    }
    return (
        <>
            { currentUser &&
                <Button type="submit" variant="outlined" onClick={() => handleClick()}>
                    Twój profil
                </Button>
            }
        </>)
}
