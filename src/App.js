import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <Layout>
      <NavBar />
      <Home />
    </Layout>
  );
}

export default App;
