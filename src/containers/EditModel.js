import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditModelForm from "../components/EditModel/EditModel";
import EditStore from "../stores/EditStore";

@inject(() => ({
  store: new EditStore(),
}))
@observer
class EditModel extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <EditModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          store={store}
          onChange={store.onFieldChange}
        />
        {store.editModelInfo ? (
          <p className="text-danger">Vehicle model has been edited!</p>
        ) : null}
      </div>
    );
  }

  onSubmitForm = (name) => {
    this.props.store.submitEditModel(name);
  };
}

export default EditModel;
