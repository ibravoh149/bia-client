import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AboutPage from "../Pages/About/About";
import HomePage from "../Pages/Home/Home";
import ProgramPage from "../Pages/Programs/Program";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={HomePage} path="/home" />
          <Route component={AboutPage} path="/about" />
          <Route component={ProgramPage} path="/programs" />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
