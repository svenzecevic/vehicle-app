import React, { Component } from "react";
import { inject } from "mobx-react";
import { action } from "mobx";

@inject("store")
class SortButton extends Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.store.listStore;
  }

  @action
  onSort = () => {
    this.listStore.render = !this.listStore.render;
    this.listStore.sortType = !this.listStore.sortType;
    this.listStore.carsList = this.listStore.carsList.slice().sort((a, b) => {
      const isReversed = this.listStore.sortType === true ? 1 : -1;
      return isReversed * a.make.localeCompare(b.make);
    });
  };

  render() {
    return (
      <button
        onClick={this.onSort}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort by make
      </button>
    );
  }
}

export default SortButton;
