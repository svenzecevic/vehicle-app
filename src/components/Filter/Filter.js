import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Filter extends Component {
  constructor(props) {
    super(props);

    this.listStore = this.props.store.listStore;
  }

  componentDidMount() {
    this.listStore.carsList.forEach((element) => {
      if (!this.listStore.dropdownModels.some((e) => e.make === element.make)) {
        this.listStore.dropdownModels.push({ ...element });
      }
    });
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
