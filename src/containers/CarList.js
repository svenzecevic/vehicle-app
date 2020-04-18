import React, { Component } from "react";
import CarItem from "../components/CarItem/CarItem";
import Filter from "../components/Filter/Filter";
import "./CarList.css";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import SortButton from "../components/SortButton/SortButton";

@observer
class CarList extends React.Component {
  state = {
    render: true,
    sortType: true,
  };

  @observable filterState = [];

  @computed get filteredCars() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.props.store.caritems.filter(
      (car) => !this.filterState || filterMatch.test(car.make)
    );
  }
  filter = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    this.filterState = label;
  };

  onSort = () => {
    this.setState({
      sortType: !this.state.sortType,
      render: !this.state.render,
    });
  };

  render() {
    const store = this.props.store.caritems;
    const filteredCars = this.filteredCars;
    const sorted = store.slice().sort((a, b) => {
      const isReversed = this.state.sortType === true ? 1 : -1;
      return isReversed * a.make.localeCompare(b.make);
    });

    let carsList = filteredCars.map((car) => {
      return (
        <CarItem
          id={car.id}
          make={car.make}
          model={car.model}
          className="car"
        />
      );
    });
    if (this.state.render) {
      carsList = carsList;
    } else {
      carsList = sorted.map((car) => {
        return <CarItem id={car.id} make={car.make} model={car.model} />;
      });
    }
    return (
      <div>
        <Filter onChange={this.filter.bind(this)} />
        <SortButton clicked={this.onSort} />

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
