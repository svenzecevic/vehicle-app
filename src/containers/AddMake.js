import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import AddMakeStore from "../stores/AddMakeStore";
import AddMakeForm from "../components/AddMake/AddMake";
import { withRouter } from "react-router-dom";
import axios from "../axios-cars";

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
    let makeName = make;
    let makeAbrv = makeName.substring(0, 2);

    var data = JSON.stringify({ "name": makeName, "abrv": makeAbrv });

    var config = {
      method: "post",
      url: "/resources/makes",
      headers: {
        "Authorization": "bearer " + sessionStorage.getItem("authToken"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export default withRouter(AddMake);
