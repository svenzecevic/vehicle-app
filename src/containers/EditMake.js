import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditMakeForm from "../components/EditMake/EditMake";
import ValidationFormStore from "../stores/ValidationFormStore";
import EditMakeStore from "../stores/EditMakeStore";

@inject(() => ({
  store: new ValidationFormStore(),
  editMakeStore: new EditMakeStore(),
}))
@observer
class EditMake extends Component {
  componentDidMount() {
    this.props.editMakeStore.getMakes();
  }
  render() {
    let { store, editMakeStore } = this.props;
    return (
      <div>
        <EditMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          editMakeStore={editMakeStore}
          onChange={store.onFieldChange}
        />
        {editMakeStore.info ? (
          <p className="text-danger">Vehicle make has been edited!</p>
        ) : null}
      </div>
    );
  }

  onSubmitForm = (name) => {
    this.props.editMakeStore.submitEdit(name);
  };
}

export default EditMake;
