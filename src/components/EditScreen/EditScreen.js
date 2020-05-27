import React, { Component } from "react";
import axios from "../../axios-cars";
import { inject, observer } from "mobx-react";
import { action } from "mobx";
import { withRouter } from "react-router-dom";

@inject("store")
@observer
class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.carStore = this.props.store.carStore;
    this.formStore = this.props.store.formStore;
    this.listStore.editInfo = false;
  }

  @action
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.listStore.data;
    if (data.make != null && data.model != null) {
      data.id = Math.random();
      axios.post("/caritems.json", data);
      this.listStore.editInfo = true;
    } else {
      return;
    }
  };

  @action
  handleInput = (e) => {
    this.listStore.data = {
      ...this.listStore.data,
      [e.target.name]: e.target.value,
    };
  };

  render() {
    const { vehicle } = this.listStore.data;
    let editInfo = this.listStore.editInfo;
    return (
      <form
        onSubmit={this.handleSubmit}
        className=" border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
      >
        <h1>Enter new vehicle</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg w-50 mx-auto"
            name="make"
            placeholder="Enter vehicle make..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg w-50 mx-auto "
            name="model"
            placeholder="Enter vehicle model..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        {editInfo ? <p>Your vehicle has been added!</p> : null}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(EditScreen);
