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

  @computed get Makes() {
    return this.carsList.map((make) => make.make);
  }

  @computed get uniqueSet() {
    return [...new Set(this.Makes)];
  }

  @computed get indexOfLastItem() {
    return this.currentPage * this.itemsPerPage;
  }
  @computed get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }
  @computed get currentItems() {
    return this.uniqueSet.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }

  @computed get filteredCars() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.caritems.filter(
      (car) => !this.filterState || filterMatch.test(car.make)
    );
  }

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    if (label === "All") {
      this.carsList = this.caritems;
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

  @computed get totalItems() {
    return this.uniqueSet.length;
  }

  @action
  setCurrentPage = (number) => {
    this.currentPage = number;
  };

  @computed get searchCars() {
    let searchMatch = new RegExp(this.search, "i");
    return this.caritems.filter(
      (car) => searchMatch.test(car.model) || searchMatch.test(car.make)
    );
  }

  @action
  searchHandler = (e) => {
    let result = e.target.value;
    this.search = result;
    this.carsList = this.searchCars;
  };

  @action
  onSort = () => {
    this.render = !this.render;
    this.sortType = !this.sortType;
    this.carsList = this.carsList.slice().sort((a, b) => {
      const isReversed = this.sortType === true ? 1 : -1;
      return isReversed * a.make.localeCompare(b.make);
    });
  };

  @action
  handleListCDM = (response) => {
    this.caritems = Object.values(response.data);
    this.carsList = this.caritems;
    this.carsList.forEach((element) => {
      if (!this.dropdownModels.some((e) => e.make === element.make)) {
        this.dropdownModels.push({ ...element });
      }
    });
  };
}

export default ListStore;
