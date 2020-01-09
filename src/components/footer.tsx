import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavLink to="/index/home" activeClassName="ac">
          主页
        </NavLink>
        <NavLink to="/index/my" activeClassName="ac">
          我的
        </NavLink>
      </div>
    );
  }
}

export default footer;
