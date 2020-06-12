import { action, computed, observable } from "mobx";
import GenericFormStore from "./GenericFormStore";
import axios from "../axios-cars";
import { checkPropTypes } from "prop-types";

class AddMakeStore extends GenericFormStore {
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

  @computed get filteredMakes() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.models.filter(
      (car) => !this.filterState || filterMatch.test(car.name)
    );
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    this.models = this.filteredMakes;
    console.log(this.models);
  };

  @action
  getModels = () => {
    axios.get("/resources/models").then((res) => {
      this.models = res.data.item;
    });
  };

  @action
  restartInfo = () => {
    this.info = false;
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
}

export default AddMakeStore;
