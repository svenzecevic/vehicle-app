import { observable } from "mobx";
class CarsStore {
  constructor(rootStore){
    this.rootStore = rootStore

  }
  @observable caritems = [];
  @observable filterState = [];
}

export default CarsStore
