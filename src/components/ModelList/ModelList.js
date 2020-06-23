import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import VehicleMake from "../CarItem/VehicleMake";

@inject("modelListStore")
@observer
class CarList extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  componentDidMount() {
    this.modelListStore.getModels();
    this.modelListStore.getPageNum();
  }

  componentWillUnmount() {
    this.modelListStore.removePageNum();
  }

  render() {
    return (
      <div>
        <li>
          {this.modelListStore.currentItems.map((car) => {
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
