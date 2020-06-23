import { action, computed, observable } from "mobx";
import axios from "../axios-cars";
import BaseListStore from "../stores/BaseListStore";

class AddModelStore extends BaseListStore {
  @observable dropdownMakes = [];

  @action
  getMakes = () => {
    axios.get("/resources/makes?rpp=100").then((response) => {
      let items = response.data.item;
      this.itemsList = items;
      items.forEach((element) => {
        if (!this.dropdownMakes.some((e) => e.name === element.name)) {
          this.dropdownMakes.push({ ...element });
        }
      });
    });
  };

  @action
  submitModel = (model) => {
    let modelName = model;
    let modelAbrv = modelName.substring(0, 2);
    let idArr = this.itemsList.map((make) => make.id);
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
        this.info = true;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default AddModelStore;
