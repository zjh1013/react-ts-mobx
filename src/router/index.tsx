import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Index from "../containers/home/index";
import Login from "../containers/login/login";

class RootRouter extends React.Component<any> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/index" component={Index}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/index"></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default RootRouter;
