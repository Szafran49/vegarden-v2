import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './navBar/NavBar'
import Loader from "react-loader-spinner";
import { Container } from '@material-ui/core';


const Layout = ({ children }) => {



  return (
    <>
      <CssBaseline />
      <NavBar />
      {children}
    </>
  )
};

export default Layout; 
