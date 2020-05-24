import React, { Component } from "react";
import PropTypes from "prop-types";
import { action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import CarItem from "../CarItem/CarItem";
import axios from "../../axios-cars";

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

  render() {
    return (
      <div>
        <li>{this.renderList}</li>
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
