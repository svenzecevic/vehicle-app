import { action, observable } from "mobx";
import axios from "../axios-cars";

class AddMakeStore {
  @observable info = false;

  @action
  addMake = (make) => {
    let makeAbrv = make.substring(0, 2);

    let data = JSON.stringify({ "name": make, "abrv": makeAbrv });

    let config = {
      method: "post",
      url: "/resources/makes",
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

export default AddMakeStore;
