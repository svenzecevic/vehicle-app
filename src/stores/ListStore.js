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
  @observable filterState = [];
  @observable search = [];
  @observable responseData = [];
  @observable modelsList = [];
  @observable modelsData = [];
  @observable responseModels = [];

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

  @computed get filteredCars() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.carsList.filter(
      (car) => !this.filterState || filterMatch.test(car.name)
    );
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    if (label === "All") {
      this.carsList = this.responseData;
    } else {
      this.carsList = this.filteredCars;
    }
  };

  @action
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.data;
    if (data.make != null && data.model != null) {
      data.id = Math.random();
      axios.post("/caritems.json", data);
      this.editInfo = true;
    } else {
      return;
    }
  };

  @action
  handleInput = (e) => {
    this.data = {
      ...this.data,
      [e.target.name]: e.target.value,
    };
  };

  @computed get totalMakes() {
    return this.uniqueSet.length;
  }

  @computed get totalModels() {
    return this.Items.length;
  }

  @action
  setCurrentPage = (number) => {
    this.currentPage = number;
  };

  @computed get searchItems() {
    let searchMatch = new RegExp(this.search, "i");
    return this.carsList.filter((car) => searchMatch.test(car.name));
  }

  @action
  searchHandler = (e) => {
    let result = e.target.value;
    this.search = result;
    this.carsList = this.searchItems;
  };

  @action
  onSortMakeAsc = () => {
    axios.get("/resources/makes/?sort=name|asc").then((response) => {
      let ascMakes = response.data.item;
      this.carsList = ascMakes;
    });
  };

  @action
  onSortMakeDesc = () => {
    axios.get("/resources/makes/?sort=name|desc").then((response) => {
      let descMakes = response.data.item;
      this.carsList = descMakes;
    });
  };

  @action
  onSortModelAsc = () => {
    axios.get("/resources/models/?sort=name|asc").then((response) => {
      let ascModels = response.data.item;
      this.modelsList = ascModels;
    });
  };

  @action
  onSortModelDesc = () => {
    axios.get("/resources/models/?sort=name|desc").then((response) => {
      let descModels = response.data.item;
      this.modelsList = descModels;
    });
  };

  @action
  getMakes = () => {
    axios.get("/resources/makes").then((response) => {
      let items = response.data.item;
      this.carsList = items;
      this.responseData = items;
      items.forEach((element) => {
        if (!this.dropdownModels.some((e) => e.name === element.name)) {
          this.dropdownModels.push({ ...element });
        }
      });
    });
  };

  @action
  getModels = () => {
    axios.get("/resources/models").then((response) => {
      this.modelsList = response.data.item;
      this.responseModels = response.data.item;
    });
  };

  @action
  onReload = () => {
    this.carsList = this.responseData;
  };

  @action
  submitModel = (model) => {
    let modelName = model;
    let modelAbrv = modelName.substring(0, 2);
    let idArr = this.carsList.map((make) => make.id);
    let id = idArr.toString();

    var data = JSON.stringify({
      "name": modelName,
      "abrv": modelAbrv,
      "makeId": id,
    });

    var config = {
      method: "post",
      url: "/resources/models",
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
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

  @action
  addMake = (make) => {
    let makeAbrv = make.substring(0, 2);

    var data = JSON.stringify({ "name": make, "abrv": makeAbrv });

    var config = {
      method: "post",
      url: "/resources/makes",
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
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
