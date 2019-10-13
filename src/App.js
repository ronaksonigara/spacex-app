import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Navigation from "./Component/Navigaton";
import Launchpads from "./Component/Launchpads";
import Missions from "./Component/Missions";
import Payloads from "./Component/Payloads";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Launchpads} />
        <Route path="/spacex-app" exact component={Launchpads} />
        <Route path="/launchpads" exact component={Launchpads} />
        <Route path="/missions" exact component={Missions} />
        <Route path="/payloads/:id" exact component={Payloads} />
      </Switch>
    </Router>
  );
}

export default App;
