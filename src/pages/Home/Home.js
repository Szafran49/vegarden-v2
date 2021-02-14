import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Link from '../../shared/StyledLink';

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
  height: 900px;
`;

const Home = () => {
  return (
    <StyledGrid
      spacing={0}
      direction="column"
      alignItems="center"
      justify="top"
    >
      <Link to="/flower-beds/overview">
        <StyledButton variant="contained">Start</StyledButton>
      </Link>
    </StyledGrid>
  );
};

export default Home;
