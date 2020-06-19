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
  @observable filterStateMake = [];
  @observable filterStateModel = [];
  @observable editMakeInfo = false;
  @observable editModelInfo = false;

  @computed get filteredModels() {
    let filterMatch = new RegExp(this.filterStateModel, "i");
    return this.models.filter(
      (car) => !this.filterStateModel || filterMatch.test(car.name)
    );
  }

  @computed get filteredMakes() {
    let filterMatch = new RegExp(this.filterStateMake, "i");
    return this.makes.filter(
      (car) => !this.filterStateMake || filterMatch.test(car.name)
    );
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterStateModel = label;
    this.models = this.filteredModels;
  };

  @action
  filterMakes = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterStateMake = label;
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

  @action
  submitEditMake = (make) => {
    let makeName = make;
    let makeAbrv = makeName.substring(0, 2);
    let idArr = this.makes.map((make) => make.id);
    let makeId = idArr.toString();

    let data = JSON.stringify({
      "name": makeName,
      "abrv": makeAbrv,
      "id": makeId,
    });

    let config = {
      method: "put",
      url: "/resources/makes/" + makeId,
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(() => {
        this.editMakeInfo = true;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  @action
  submitEditModel = (model) => {
    let modelName = model;
    let modelAbrv = modelName.substring(0, 2);
    let idArrModel = this.models.map((model) => model.id);
    let modelId = idArrModel.toString();

    let data = JSON.stringify({
      "name": modelName,
      "abrv": modelAbrv,
      "id": modelId,
    });

    let config = {
      method: "put",
      url: "/resources/models/" + modelId,
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(() => {
        this.editModelInfo = true;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default EditStore;
