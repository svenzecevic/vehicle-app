import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddMakeStore from "../stores/AddMakeStore";
import ValidationFormStore from "../stores/ValidationFormStore";
import AddMakeForm from "../components/AddMake/AddMakeForm";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new ValidationFormStore(),
  addMakeStore: new AddMakeStore(),
}))
@observer
class AddMake extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <AddMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }
  onSubmitForm = (make) => {
    this.props.addMakeStore.addMake(make);
    this.props.history.push("/make-list");
  };
}

export default withRouter(AddMake);
