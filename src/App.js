import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import CarList from "./containers/CarList"



class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <CarList />
          
        </Layout>
      </div>
    );
  }
}

export default App;
