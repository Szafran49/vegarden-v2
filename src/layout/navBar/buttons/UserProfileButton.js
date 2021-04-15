import Button from "./NavBarButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContexts";

export default function UserProfileButton() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`profile`);
  }
  return (
    <>
      {currentUser && (
        <Button onClick={() => handleClick()}>Twój profil</Button>
      )}
    </>
  );
}
