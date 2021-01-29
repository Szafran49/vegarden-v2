import React from "react";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Creator from "./components/Creator";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Layout>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/creator">
            <Creator />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
