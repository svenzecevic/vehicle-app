import { action, observable } from "mobx";
import BaseListStore from "./BaseListStore";
import axios from "../axios-cars";

class DeleteMakeStore extends BaseListStore {
  @observable makeInfo = false;

  @action
  getMakes = () => {
    axios.get("/resources/makes?rpp=100").then((res) => {
      this.itemsList = res.data.item;
    });
  };

  @action
  handleEdit = () => {
    let id = this.itemsList[0].id;

    let config = {
      method: "delete",
      url: "/resources/makes/" + id,
      headers: {
        "Authorization": "bearer " + localStorage.getItem("authToken"),
      },
    };
    axios(config).then((res) => {
      this.makeInfo = true;
    });
  };
}

export default DeleteMakeStore;
