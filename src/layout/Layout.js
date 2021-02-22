import NavBar from '../components/navBar/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
};

export default Layout;
