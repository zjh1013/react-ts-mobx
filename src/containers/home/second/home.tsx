import React, { Component } from "react";
import { observer, inject } from "mobx-react";
@inject("Home")
@observer
export class home extends Component {
  render() {
    console.log(this.props);
    return <div>这是二级路由 home</div>;
  }
}
export default home;
