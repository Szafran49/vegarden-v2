import logo from './vegarden-logo.png'
import styled from 'styled-components'

const StyledImage = styled.img`
  width:85px;
  height:85px;
`

const NavBarLogo = () => {
  return <StyledImage src={logo} alt="logo" />;
};

export default NavBarLogo;
