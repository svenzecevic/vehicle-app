import React, { Component } from "react";
import axios from "../../axios-cars";
import { inject, observer } from "mobx-react";
import { action } from "mobx";

@inject("store")
@observer
class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.carStore = this.props.store.carStore;
  }

  @action
  editingCloseHandler = () => {
    this.listStore.editing = false;
  };

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
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="make"
            placeholder="Enter vehicle make..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="model"
            placeholder="Enter vehicle model..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.editingCloseHandler}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default EditScreen;
