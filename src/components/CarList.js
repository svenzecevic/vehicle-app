import React, { Component } from "react";
import CarItem from "./CarItem";
import Filter from "./Filter";
import Sort from "./Sort";
import "./CarList.css";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

@observer
class CarList extends React.Component {
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  render() {
    const cars = this.props.store.caritems;
    const filter = this.props.store.filter;
    const filteredCars = this.props.store.filteredCars;
    const carsList = filteredCars.map((car) => {
      return (
        <CarItem
          key={car.id}
          make={car.make}
          model={car.model}
          className="car"
        />
      );
    });
    return (
      <div>
        <Filter
          value={filter}
          onChange={this.filter.bind(this)}
          className="filter"
        />

        <Sort className="sort" />

        <li className="cars-list">{carsList}</li>
      </div>
    );
  }
}
CarItem.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  id: PropTypes.number,
};
Filter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  onChange: PropTypes.func,
};

export default CarList;
