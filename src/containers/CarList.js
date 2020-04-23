import React, { Component } from "react";
import CarItem from "../components/CarItem/CarItem";
import Filter from "../components/Filter/Filter";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import SortButton from "../components/SortButton/SortButton";
import Pagination from "../components/Pagination/Pagination";
import AddButton from "../components/AddButton/AddButton";
import Modal from "../components/Modal/Modal";
import EditScreen from "../components/EditScreen/EditScreen";
import axios from "../axios-cars";

@observer
class CarList extends React.Component {
  state = {
    render: true,
    sortType: true,
    currentPage: 1,
    itemsPerPage: 5,
    carsList: [],
    editing: false,
  };

  componentDidMount() {
    axios
      .get("https://project-app-628a3.firebaseio.com/caritems.json")
      .then((response) => {
        this.props.store.caritems = Object.values(response.data);
        console.log(this.state.carsList);
        this.setState({
          carsList: this.props.store.caritems,
        });
      });
  }

  editingHandler = () => {
    this.setState({
      editing: true,
    });
  };

  editingCloseHandler = () => {
    this.setState({
      editing: false,
    });
  };

  setCurrentPage = (number) => {
    this.setState({
      currentPage: number,
    });
  };

  @observable filterState = [];

  @computed get filteredCars() {
    let filterMatch = new RegExp(this.filterState, "i");
    return this.state.carsList.filter(
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
    const store = this.props.store.caritems;
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
        <Filter
          onChange={this.filter.bind(this)}
          store={this.props.store.caritems}
        />
        <SortButton clicked={this.onSort} />
        <AddButton clicked={this.editingHandler} />

        <li>{renderList}</li>
        <Modal show={this.state.editing}>
          <EditScreen
            closed={this.editingCloseHandler}
            store={this.props.store.caritems}
          />
        </Modal>
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
