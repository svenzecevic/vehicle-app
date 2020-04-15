import React, { Component } from "react";
import CarItem from "../components/CarItem/CarItem";
import Filter from "../components/Filter/Filter";
import "./CarList.css";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

@observer
class CarList extends React.Component {
  @observable filterState = [];

  @computed get filteredCars() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.props.store.caritems.filter(
      (car) => !this.filterState || filterMatch.test(car.make)
    );
  }
  filter(e) {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
  }

  render() {
    const carsList = this.filteredCars.map((car) => {
      return <CarItem key={car.id} make={car.make} model={car.model} />;
    });
    return (
      <div>
        <Filter onChange={this.filter.bind(this)} />

        <li>{carsList}</li>
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
