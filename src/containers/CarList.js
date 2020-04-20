import React, { Component } from "react";
import CarItem from "../components/CarItem/CarItem";
import Filter from "../components/Filter/Filter";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import SortButton from "../components/SortButton/SortButton";
import Pagination from "../components/Pagination/Pagination";

@observer
class CarList extends React.Component {
  state = {
    render: true,
    sortType: true,
    currentPage: 1,
    itemsPerPage: 2,
    carsList: [],
  };

  componentDidMount() {
    this.setState({
      carsList: this.props.store.caritems,
    });
  }

  setCurrentPage(number) {
    this.setState({
      currentPage: number,
    });
  }

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
    this.setState({
      carsList: this.filteredCars,
    });
  };

  onSort = () => {
    this.setState({
      render: !this.state.render,
      sortType: !this.state.sortType,
      carsList: this.state.carsList.slice().sort((a, b) => {
        const isReversed = this.state.sortType === true ? -1 : 1;
        return isReversed * a.make.localeCompare(b.make);
      }),
    });
  };

  render() {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    let currentItems = this.state.carsList.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    let renderList = currentItems.map((car) => {
      return <CarItem key={car.id} make={car.make} model={car.model} />;
    });
    const setPaginate = (pageNumber) => this.setCurrentPage(pageNumber);
    return (
      <div>
        <Filter onChange={this.filter.bind(this)} />
        <SortButton clicked={this.onSort} />

        <li>{renderList}</li>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.state.carsList.length}
          paginate={setPaginate}
        />
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