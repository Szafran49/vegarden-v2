import React from "react";
import Home from "./components/pages/Home";
import Layout from "./layout/Layout";
import NavBar from "./components/navBar/NavBar";
import FlowerBeds from "./components/pages/FlowerBeds";
import FlowerBedForm from "./components/FlowerBedForm";
import Vegetables from "./components/pages/Vegetables";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/flower-beds" exact>
            <FlowerBeds />
          </Route>
          <Route path="/flower-beds/create" exact>
            <FlowerBedForm />
          </Route>
          <Route path="/flower-beds/choose-vegetables" exact>
            <Vegetables />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
