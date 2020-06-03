import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.listStore.editInfo = false;
  }

  render() {
    const { vehicle } = this.listStore.data;
    let editInfo = this.listStore.editInfo;
    return (
      <form
        onSubmit={this.listStore.handleSubmit}
        className=" border w-75 mx-auto shadow p-3 mb-5 bg-white rounded"
      >
        <h1>Enter new vehicle</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg w-50 mx-auto"
            name="make"
            placeholder="Enter vehicle make..."
            onChange={this.listStore.handleInput}
            value={vehicle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg w-50 mx-auto "
            name="model"
            placeholder="Enter vehicle model..."
            onChange={this.listStore.handleInput}
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

export default EditScreen;
