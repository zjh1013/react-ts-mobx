import { observable } from "mobx";
class Home {
  @observable title = "hello world";
}

const home = new Home();
export default home;
