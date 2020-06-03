import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import CarItem from "../CarItem/CarItem";
import axios from "../../axios-cars";

@inject("listStore")
@observer
class CarList extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  componentDidMount() {
    axios
      .get("https://project-app-628a3.firebaseio.com/caritems.json")
      .then((response) => {
        this.listStore.caritems = Object.values(response.data);
        this.listStore.carsList = this.listStore.caritems;
        this.listStore.carsList.forEach((element) => {
          if (
            !this.listStore.dropdownModels.some((e) => e.make === element.make)
          ) {
            this.listStore.dropdownModels.push({ ...element });
          }
        });
      });
  }

  render() {
    return (
      <div>
        <li>
          {this.listStore.currentItems.map((car) => {
            return <CarItem key={car.id} make={car.make} model={car.model} />;
          })}
        </li>
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
