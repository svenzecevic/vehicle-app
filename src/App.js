import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
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
