import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import EditMakeForm from "../components/EditMake/EditMake";
import EditStore from "../stores/EditStore";

@inject(() => ({
  store: new EditStore(),
}))
@observer
class EditMake extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        <EditMakeForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          store={store}
          onChange={store.onFieldChange}
        />
        {store.editMakeInfo ? (
          <p className="text-danger">Vehicle make has been edited!</p>
        ) : null}
      </div>
    );
  }

  onSubmitForm = (name) => {
    this.props.store.submitEditMake(name);
  };
}

export default EditMake;
