import CarStore from "./CarStore";
import ListStore from "./ListStore";
import FormStore from "./FormStore";

class RootStore {
  constructor() {
    this.carStore = new CarStore(this);
    this.listStore = new ListStore(this);
    this.formStore = new FormStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
