import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/navBar/NavBar'

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
