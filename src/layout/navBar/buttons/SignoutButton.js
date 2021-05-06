import Button from "./NavBarButton";
import { useNavigate } from "react-router";
import { useAuth } from "../../../contexts/AuthContexts";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
      {currentUser && <Button onClick={() => handleLogout()}><ExitToAppIcon />Wyloguj</Button>}
    </>
  );
}
