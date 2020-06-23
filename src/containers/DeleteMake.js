import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import DeleteMakeForm from "../components/DeleteMake/DeleteMakeForm";
import ValidationFormStore from "../stores/ValidationFormStore";
import DeleteMakeStore from "../stores/DeleteMakeStore";

@inject(() => ({
  store: new ValidationFormStore(),
  deleteMakeStore: new DeleteMakeStore(),
}))
@observer
class DeleteModel extends Component {
  componentDidMount = () => {
    this.props.deleteMakeStore.getMakes();
  };

  onSubmitForm = () => {
    this.props.deleteMakeStore.handleEdit();
  };

  render() {
    let { store, deleteMakeStore } = this.props;
    return (
      <div>
        <DeleteMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          onChange={store.onFieldChange}
          deleteMakeStore={deleteMakeStore}
        />
        {deleteMakeStore.makeInfo ? (
          <p className="text-danger">Vehicle make has been deleted!</p>
        ) : null}
      </div>
    );
  }
}

export default DeleteModel;
