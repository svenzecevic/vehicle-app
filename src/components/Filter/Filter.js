import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("listStore")
@observer
class Filter extends Component {
  constructor(props) {
    super(props);

    this.listStore = this.props.listStore;
  }

  render() {
    return (
      <React.Fragment>
        <label></label>
        <select
          onChange={this.listStore.filter.bind(this)}
          defaultValue={"default"}
        >
          <option disabled value="default">
            Choose a make...
          </option>
          <option>All</option>
          {this.listStore.dropdownModels.map((opt) => {
            return <option key={opt.id}> {opt.make} </option>;
          })}
        </select>
      </React.Fragment>
    );
  }
}

export default Filter;
