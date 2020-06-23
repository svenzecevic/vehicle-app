import { action, observable } from "mobx";
import BaseListStore from "./BaseListStore";
import axios from "../axios-cars";

class EditModelStore extends BaseListStore {
  @observable info = false;

  @action
  getModels = () => {
    axios.get("/resources/models?rpp=100").then((res) => {
      this.itemsList = res.data.item;
    });
  };

  @action
  submitEdit = (model) => {
    let modelName = model;
    let modelAbrv = modelName.substring(0, 2);
    let idArrModel = this.itemsList.map((model) => model.id);
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
        "Authorization": "bearer " + localStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(() => {
        this.info = true;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default EditModelStore;
