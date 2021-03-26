import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Epics/Dashboard/Dashboard";
import DetailPage from "./Epics/DetailPage/DetailPage";
import Login from "./Epics/Login/Login";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/login" />;
          }}
        />
        <Route path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/:type" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default Routing;
