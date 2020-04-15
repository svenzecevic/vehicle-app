import React, { Component } from "react";
import CarItem from "../components/CarItem/CarItem";
import Filter from "../components/Filter/Filter";
import "./CarList.css";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

@observer
class CarList extends React.Component {
  filter(e) {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.props.store.filter = label;
  }

  render() {
    const filteredCars = this.props.store.filteredCars;
    const carsList = filteredCars.map((car) => {
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
