import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import AboutPage from "../Pages/About/About";
import HomePage from "../Pages/Home/Home";
import MembershipPage from "../Pages/Membership/MemberShip";
import AcademicProgram from "../Pages/ProgramDetails/AcademicProgram/AcademicProgram";
import ProgramPage from "../Pages/Programs/Program";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={HomePage} path="/home" />
          <Route component={AboutPage} path="/about" />
          <Route component={MembershipPage} path="/membership" />
          <Route component={ProgramPage} path="/programs" exact />
          <Route
            component={AcademicProgram}
            path="/programs/academic-program"
            exact
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
