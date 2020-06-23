import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddModelForm from "../components/AddModel/AddModelForm";
import AddFormStore from "../stores/AddFormStore";
import AddModelStore from "../stores/AddModelStore";
import { withRouter } from "react-router-dom";

@inject(() => ({
  store: new AddFormStore(),
  addModelStore: new AddModelStore(),
}))
@observer
class AddModel extends Component {
  render() {
    let { store, addModelStore } = this.props;
    return (
      <div>
        <AddModelForm
          onSubmit={this.onSubmitForm}
          form={store.form}
          addModelStore={addModelStore}
          onChange={store.onFieldChange}
        />
      </div>
    );
  }

  onSubmitForm = (name) => {
    this.props.addModelStore.submitModel(name);
    this.props.history.push("/model-list");
  };
}

export default withRouter(AddModel);
