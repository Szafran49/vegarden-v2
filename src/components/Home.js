import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Link from "react-router-dom/Link";
const StyledButton = styled(Button)`
  background: blue;
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  right: 0;
  border-radius: 0px;
`;

const StyledContainer = styled(Grid)`
  background: red;
  height: 900px;
  item-align: center;
`;

const Home = () => {
  return (
    <StyledContainer
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="top"
      style={{ minHeight: "100vh" }}
    >
      <Link to="/creator">
        <StyledButton size="large" variant="contained" color="primary">
          Zaczynajmy!
        </StyledButton>
      </Link>
    </StyledContainer>
  );
};

export default Home;
