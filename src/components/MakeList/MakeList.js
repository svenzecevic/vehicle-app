import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import VehicleMake from "../CarItem/VehicleMake";

@inject("listStore")
@observer
class CarList extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
  }

  componentDidMount() {
    this.listStore.getMakes();
  }

  render() {
    return (
      <div>
        <li>
          {this.listStore.currentMakes.map((car) => {
            return (
              <VehicleMake make={car} clicked={this.listStore.clickedHandler} />
            );
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
