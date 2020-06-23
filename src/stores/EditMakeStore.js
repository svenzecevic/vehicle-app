import { action, observable } from "mobx";
import BaseListStore from "./BaseListStore";
import axios from "../axios-cars";

class EditMakeStore extends BaseListStore {
  @observable info = false;

  @action
  getMakes = () => {
    axios.get("/resources/makes?rpp=100").then((res) => {
      this.itemsList = res.data.item;
    });
  };

  @action
  submitEdit = (make) => {
    let makeName = make;
    let makeAbrv = makeName.substring(0, 2);
    let idArr = this.itemsList.map((make) => make.id);
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

export default EditMakeStore;
