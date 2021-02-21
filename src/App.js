import React from "react";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import NavBar from "./components/navBar/NavBar";
import FlowerBeds from "./pages/FlowerBeds";
import FlowerBedForm from "./pages/FlowerBedForm";
import Vegetables from "./pages/SelectVegetables";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContexts";
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './theme/theme'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flower-beds">
                <Route path="/overview" element={<FlowerBeds />} />
                <Route path="/create">
                  <Route path="/form" element={<FlowerBedForm />} />
                  <Route path="/select-vegetables" element={<Vegetables />} />
                </Route>
              </Route>
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
