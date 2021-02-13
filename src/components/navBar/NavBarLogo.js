import logo from './vegarden-logo.png'
import styled from 'styled-components'

const StyledImage = styled.img`
  width:100px;
  height:100px;
`



const NavBarLogo = () => {
  return <StyledImage src={logo} alt="logo" />;
};

export default NavBarLogo;
