import { action, observable } from "mobx";
import axios from "../axios-cars";
import BaseListStore from "./BaseListStore";

class MakeListStore extends BaseListStore {
  constructor(rootStore) {
    super(rootStore);
    this.rootStore = rootStore;
  }

  @observable dropdownMakes = [];

  @action
  getMakes = () => {
    axios.get("/resources/makes?rpp=100").then((response) => {
      let items = response.data.item;
      this.itemsList = items;
      this.responseData = items;
      items.forEach((element) => {
        if (!this.dropdownMakes.some((e) => e.name === element.name)) {
          this.dropdownMakes.push({ ...element });
        }
      });
    });
  };

  @action
  onSortAsc = () => {
    axios.get("/resources/makes/?sort=name|asc").then((response) => {
      let ascMakes = response.data.item;
      this.itemsList = ascMakes;
    });
  };

  @action
  onSortDesc = () => {
    axios.get("/resources/makes/?sort=name|desc").then((response) => {
      let descMakes = response.data.item;
      this.itemsList = descMakes;
    });
  };
}

export default MakeListStore;
