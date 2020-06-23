import { action, observable } from "mobx";
import BaseListStore from "./BaseListStore";
import axios from "../axios-cars";

class DeleteModelStore extends BaseListStore {
  @observable info = false;

  @action
  getModels = () => {
    axios.get("/resources/models?rpp=100").then((res) => {
      this.itemsList = res.data.item;
    });
  };

  @action
  handleEdit = () => {
    let id = this.itemsList[0].id;

    let config = {
      method: "delete",
      url: "/resources/models/" + id,
      headers: {
        "Authorization": "bearer " + localStorage.getItem("authToken"),
      },
    };
    axios(config).then(() => {
      this.info = true;
    });
  };
}

export default DeleteModelStore;
