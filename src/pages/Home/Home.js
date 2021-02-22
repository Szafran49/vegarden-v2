import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { useAuth } from '../../contexts/AuthContexts'
import { useNavigate } from "react-router";
import { useState } from 'react'
import LoginReminder from "./LoginReminder";

const StyledButton = styled(Button)`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  right: 45vw;
  left: 45vw;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  font-size: 24px;
  text-decoration: none;
  &:hover {
    background-color: green;
  }
`;

const StyledGrid = styled(Grid)`
`;

const Home = () => {
  const { currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  var modalBody = <LoginReminder isOpen={open} setOpen={setOpen} />;

  const handleClick = () => {
    if (!currentUser) {
      setOpen(true)
    }
    else {
      navigate('/flower-beds/overview')
    }
  }


  return (
    <>
      <StyledGrid
        spacing={0}
        direction="column"
        alignItems="center"
        justify="top"
      >
        <StyledButton variant="contained" onClick={handleClick}>Start</StyledButton>
        {modalBody}
      </StyledGrid>
    </>
  );
};

export default Home;
