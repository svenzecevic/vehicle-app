import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import VehicleMake from "../CarItem/VehicleMake";

@inject("makeListStore")
@observer
class CarList extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  componentDidMount() {
    this.makeListStore.getMakes();
    this.makeListStore.getPageNum();
  }

  componentWillUnmount() {
    this.makeListStore.removePageNum();
  }

  render() {
    return (
      <div>
        <li>
          {this.makeListStore.currentItems.map((car) => {
            return <VehicleMake make={car} />;
          })}
        </li>
      </div>
    );
  }
}
VehicleMake.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  id: PropTypes.number,
};

export default CarList;
