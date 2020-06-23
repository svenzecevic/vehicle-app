import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("modelListStore")
class Reload extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  render() {
    return (
      <button
        onClick={this.modelListStore.onReload}
        className="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
      >
        Reload
      </button>
    );
  }
}

export default Reload;
