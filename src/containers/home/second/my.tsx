import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("My")
@observer
export class my extends Component<any> {
  render() {
    console.log(this.props);
    return <div>这是二级路由 my</div>;
  }
}
export default my;
