import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import CarList from "./containers/CarList";
import store from "./stores/CarStore";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <CarList store={store} />
        </Layout>
      </div>
    );
  }
}

export default App;
