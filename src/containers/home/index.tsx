import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./second/home";
import My from "./second/my";
import Header from "../../components/header";
import Footer from "../../components/footer";
export class index extends Component {
  render() {
    return (
      <div className="root">
        {/* 这是一级路由 index */}
        <Header></Header>
        <div className="content">
          <Switch>
            <Route path="/index/home" component={Home}></Route>
            <Route path="/index/my" component={My}></Route>
            <Redirect from="/index" to="/index/home"></Redirect>
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default index;
