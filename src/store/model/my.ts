import { observable } from "mobx";

class My {
  @observable title = "hello world";
}
const my = new My();
export default my;
