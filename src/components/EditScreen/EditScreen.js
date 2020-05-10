import React, { Component } from "react";
import axios from "../../axios-cars";
import { inject, observer } from "mobx-react";
import { action, computed } from "mobx";

@inject("store")
@observer
class EditScreen extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
    this.carStore = this.props.store.carStore;
    this.formStore = this.props.store.formStore;
    console.log(this.formStore.className);
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
        <div className={this.formStore.divClassName}>
          <input
            type={this.formStore.makeType}
            className={this.formStore.makeClassName}
            name={this.formStore.makeName}
            placeholder={this.formStore.makePlaceholder}
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <div className={this.formStore.divClassName}>
          <input
            type={this.formStore.modelType}
            className={this.formStore.modelClassName}
            name={this.formStore.modelName}
            placeholder={this.formStore.modelPlaceholder}
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <button
          type={this.formStore.btnType}
          className={this.formStore.btnClassName}
          onClick={this.editingCloseHandler}
        >
          {this.formStore.btnLabel}
        </button>
      </form>
    );
  }
}

export default EditScreen;
