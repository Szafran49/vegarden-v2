import logo from './vegarden-logo.png'
import styled from 'styled-components'

const StyledImage = styled.img`
  width:auto;
  height:100%;
`

const NavBarLogo = () => {
  return <StyledImage src={logo} alt="logo" />;
};

export default NavBarLogo;
