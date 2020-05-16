import React, { Component } from "react";
import axios from "../../axios-cars";
import { inject, observer } from "mobx-react";
import { action, computed } from "mobx";
import { Link } from "react-router-dom";

@inject("store")
@observer
class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.carStore = this.props.store.carStore;
    this.formStore = this.props.store.formStore;
  }

  @action
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.listStore.data;
    if (data.make != null && data.model != null) {
      data.id = Math.random();
      axios.post("/caritems.json", data);
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

        <Link to="/main-page">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Link>
      </form>
    );
  }
}

export default EditScreen;
