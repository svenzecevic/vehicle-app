import { action, computed, observable } from "mobx";

class BaseListStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable currentPage = 1;
  @observable itemsPerPage = 5;
  @observable PageNum = [];
  @observable itemsList = [];
  @observable filterState = [];

  @computed get indexOfLastItem() {
    return this.currentPage * this.itemsPerPage;
  }

  @computed get indexOfFirstItem() {
    return this.indexOfLastItem - this.itemsPerPage;
  }

  @computed get totalItems() {
    return this.itemsList.length;
  }

  @computed get renderItems() {
    return this.itemsList.map((car) => car.name);
  }

  @computed get currentItems() {
    return this.renderItems.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }

  @computed get filteredItems() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.itemsList.filter(
      (car) => !this.filterState || filterMatch.test(car.name)
    );
  }

  @action
  getPageNum = () => {
    for (let i = 1; i <= Math.ceil(this.totalItems / this.itemsPerPage); i++) {
      this.PageNum.push(i);
    }
  };

  @action
  removePageNum = () => {
    this.PageNum = [];
  };

  @action
  setCurrentPage = (number) => {
    this.currentPage = number;
  };

  @action
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
    if (label === "All") {
      this.itemsList = this.responseData;
    } else {
      this.itemsList = this.filteredItems;
    }
  };

  @action
  searchHandler = (e) => {
    let result = e.target.value;
    this.filterState = result;
    this.itemsList = this.filteredItems;
  };

  @action
  onReload = () => {
    this.itemsList = this.responseData;
  };
}

export default BaseListStore;
