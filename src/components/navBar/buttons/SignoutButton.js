import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";
import { useAuth } from "../../../contexts/AuthContexts";

export default function LogoutButton() {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    try {
      signOut();
      navigate("/");
    } catch {
      alert("Nie udało się pomyślnie wylogować");
    }
  }
  return (
    <>
      {currentUser && (
        <Button type="submit" variant="outlined" onClick={() => handleLogout()}>
          Wyloguj
        </Button>
      )}
    </>
  );
}
