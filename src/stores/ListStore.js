import { action, computed, observable } from "mobx";
import axios from "../axios-cars";

class ListStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  @observable render = true;
  @observable sortType = true;
  @observable currentPage = 1;
  @observable itemsPerPage = 5;
  @observable editing = false;
  @observable dropdownModels = [];
  @observable filterState = [];
  @observable carsList = [];
  @observable data = {};
  @observable editInfo = false;
  @observable caritems = [];
  @observable filterStateModels = [];
  @observable search = [];
  @observable responseData = [];
  @observable modelsList = [];
  @observable modelsData = [];
  @observable responseModels = [];
  @observable MakePageNum = [];
  @observable ModelPageNum = [];

  @computed get Items() {
    return this.carsList.map((make) => make.name);
  }

  @computed get Models() {
    return this.modelsList.map((model) => model.name);
  }

  @computed get uniqueSet() {
    return [...new Set(this.Items)];
  }

  @computed get indexOfLastItem() {
    return this.currentPage * this.itemsPerPage;
  }
  @computed get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }
  @computed get currentMakes() {
    return this.uniqueSet.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }

  @computed get currentModels() {
    return this.Models.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }

  @action
  handleInput = (e) => {
    this.data = {
      ...this.data,
      [e.target.name]: e.target.value,
    };
  };

  @action
  submitModel = (model) => {
    let modelName = model;
    let modelAbrv = modelName.substring(0, 2);
    let idArr = this.carsList.map((make) => make.id);
    let id = idArr.toString();

    let data = JSON.stringify({
      "name": modelName,
      "abrv": modelAbrv,
      "makeId": id,
    });

    let config = {
      method: "post",
      url: "/resources/models",
      headers: {
        "Authorization": "bearer " + localStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default ListStore;
