import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import axios from "../../axios-cars";
import VehicleMake from "../CarItem/VehicleMake";

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
        this.listStore.handleListCDM(response);
      });
  }

  render() {
    return (
      <div>
        <li>
          {this.listStore.currentModels.map((car) => {
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
