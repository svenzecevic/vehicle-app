import React, { Component } from "react";
import { inject } from "mobx-react";

@inject("makeListStore")
class Reload extends Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
  }

  render() {
    return (
      <button
        onClick={this.makeListStore.onReload}
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
