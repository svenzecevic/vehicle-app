import React from "react";
import Layout from "./layouts/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("listStore")
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.listStore = this.props.listStore;
    this.listStore.getMakes();
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
