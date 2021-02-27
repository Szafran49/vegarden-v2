import Button from "./NavBarButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContexts";
import { makeStyles } from "@material-ui/core/styles";

export default function UserProfileButton() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    navigate(`profile/${currentUser.uid}`);
  }
  return (
    <>
      {currentUser && (
        <Button onClick={() => handleClick()}>Twój profil</Button>
      )}
    </>
  );
}
