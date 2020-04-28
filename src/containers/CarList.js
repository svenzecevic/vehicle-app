import React, { Component } from "react";
import PropTypes from "prop-types";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import CarItem from "../components/CarItem/CarItem";
import Pagination from "../components/Pagination/Pagination";
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal/Modal";
import AddButton from "../components/AddButton/AddButton";
import SortButton from "../components/SortButton/SortButton";
import EditScreen from "../components/EditScreen/EditScreen";
import axios from "../axios-cars";

@inject("store")
@observer
class CarList extends Component {
  constructor(props) {
    super(props);
    this.carStore = this.props.store.carStore;
    this.listStore = this.props.store.listStore;
  }

  @action
  componentDidMount() {
    axios
      .get("https://project-app-628a3.firebaseio.com/caritems.json")
      .then((response) => {
        this.carStore.caritems = Object.values(response.data);
        this.listStore.carsList = this.carStore.caritems;
        this.listStore.carsList.forEach((element) => {
          if (
            !this.listStore.dropdownModels.some((e) => e.make === element.make)
          ) {
            this.listStore.dropdownModels.push({ ...element });
          }
        });
      });
  }

  @computed get indexOfLastItem() {
    return this.listStore.currentPage * this.listStore.itemsPerPage;
  }
  @computed get indexOfFirstItem() {
    return this.indexOfLastItem - this.listStore.itemsPerPage;
  }
  @computed get currentItems() {
    return this.listStore.carsList.slice(
      this.indexOfFirstItem,
      this.indexOfLastItem
    );
  }
  @computed get renderList() {
    return this.currentItems.map((car) => {
      return <CarItem key={car.id} make={car.make} model={car.model} />;
    });
  }

  @action
  onSort = () => {
    this.listStore.render = !this.listStore.render;
    this.listStore.sortType = !this.listStore.sortType;
    this.listStore.carsList = this.listStore.carsList.slice().sort((a, b) => {
      const isReversed = this.listStore.sortType === true ? 1 : -1;
      return isReversed * a.make.localeCompare(b.make);
    });
  };

  render() {
    return (
      <div>
        <Filter />
        <SortButton clicked={this.onSort} />
        <AddButton />
        <li>{this.renderList}</li>
        <Modal show={this.listStore.editing}>
          <EditScreen />
        </Modal>

        <Pagination />
      </div>
    );
  }
}
CarItem.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  id: PropTypes.number,
};

export default CarList;
