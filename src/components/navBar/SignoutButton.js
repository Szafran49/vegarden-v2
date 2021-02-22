import Button from "@material-ui/core/Button";
import { useAuth } from '../../contexts/AuthContexts'

export default function LogoutButton() {

    const { currentUser, signOut } = useAuth()
    function handleLogout() {
        try {
            signOut();
        }
        catch {

            alert("Nie udało się pomyślnie wylogować")
        }
    }
    return (
        <>
            {currentUser &&
                <Button type="submit" variant="outlined" onClick={() => handleLogout()}>
                    Wyloguj
                </Button>}
        </>
    )
}