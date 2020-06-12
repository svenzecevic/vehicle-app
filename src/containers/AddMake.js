import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddMakeStore from "../stores/AddMakeStore";
import AddMakeForm from "../components/AddMake/AddMakeForm";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new AddMakeStore(),
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
    this.props.store.addMake(make);
  };
}

export default withRouter(AddMake);
