import { action, observable } from "mobx";
import axios from "../axios-cars";
import BaseListStore from "./BaseListStore";

class ModelListStore extends BaseListStore {
  constructor(rootStore) {
    super(rootStore);
    this.rootStore = rootStore;
  }

  @action
  getModels = () => {
    axios.get("/resources/models?rpp=100").then((response) => {
      let items = response.data.item;
      this.itemsList = items;
      this.responseData = items;
    });
  };

  @action
  onSortAsc = () => {
    axios.get("/resources/models/?sort=name|asc").then((response) => {
      let ascModels = response.data.item;
      this.itemsList = ascModels;
    });
  };

  @action
  onSortDesc = () => {
    axios.get("/resources/models/?sort=name|desc").then((response) => {
      let descModels = response.data.item;
      this.itemsList = descModels;
    });
  };
}

export default ModelListStore;
