import SessionStore from "./SessionStore";
import SignUpStore from "./SignUpStore";
import PasswordForgetStore from "./PasswordForgetStore";
import MakeListStore from "./MakeListStore";
import ModelListStore from "./ModelListStore";
import BaseListStore from "./BaseListStore";

class RootStore {
  constructor() {
    this.sessionStore = new SessionStore(this);
    this.signupStore = new SignUpStore(this);
    this.pwStore = new PasswordForgetStore(this);
    this.makeListStore = new MakeListStore(this);
    this.modelListStore = new ModelListStore(this);
    this.baseListStore = new BaseListStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
