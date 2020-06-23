import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("makeListStore")
class SortMakeDesc extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <button
        onClick={this.makeListStore.onSortDesc}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Sort desc
      </button>
    );
  }
}

export default SortMakeDesc;
