import React from "react";
import Layout from "./layouts/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("makeListStore", "modelListStore")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.makeListStore = this.props.makeListStore;
    this.modelListStore = this.props.modelListStore;
    this.makeListStore.getMakes();
    this.modelListStore.getModels();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
