import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("modelListStore")
@observer
class Search extends Component {
  constructor(props) {
    super(props);
    this.modelListStore = this.props.modelListStore;
  }

  render() {
    return (
      <React.Fragment>
        <input onChange={this.modelListStore.searchHandler.bind(this)} />
      </React.Fragment>
    );
  }
}

export default Search;
