import Button from "./NavBarButton";
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
      {currentUser && <Button onClick={() => handleLogout()}>Wyloguj</Button>}
    </>
  );
}
