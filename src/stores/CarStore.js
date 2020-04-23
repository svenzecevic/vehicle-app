import { observable } from "mobx";
class CarsStore {
  @observable caritems = [];
}

export default new CarsStore();
