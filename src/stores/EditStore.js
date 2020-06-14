import { action, computed, observable } from "mobx";
import GenericFormStore from "./GenericFormStore";
import axios from "../axios-cars";

class EditStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      name: {
        value: "",
        error: null,
        rule: "required|string|between:1,25",
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  };
  @observable models = [];
  @observable info = false;
  @observable makes = [];
  @observable makeInfo = false;

  @computed get filteredModels() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.models.filter(
      (car) => !this.filterState || filterMatch.test(car.name)
    );
  }

  @computed get filteredMakes() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.makes.filter(
      (car) => !this.filterState || filterMatch.test(car.name)
    );
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    this.models = this.filteredModels;
  };

  @action
  filterMakes = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    this.makes = this.filteredMakes;
  };

  @action
  getModels = () => {
    axios.get("/resources/models?rpp=100").then((res) => {
      this.models = res.data.item;
    });
  };

  @action
  getMakes = () => {
    axios.get("/resources/makes?rpp=100").then((res) => {
      this.makes = res.data.item;
    });
  };

  @action
  handleEdit = () => {
    let id = this.models[0].id;

    let config = {
      method: "delete",
      url: "/resources/models/" + id,
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
      },
    };
    axios(config).then(() => {
      this.info = true;
    });
  };

  @action
  handleEditMake = () => {
    let id = this.makes[0].id;

    let config = {
      method: "delete",
      url: "/resources/makes/" + id,
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
      },
    };
    axios(config).then(() => {
      this.makeInfo = true;
    });
  };
}

export default EditStore;
