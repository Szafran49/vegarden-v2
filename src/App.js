import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./contexts/AuthContexts";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme/theme";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
