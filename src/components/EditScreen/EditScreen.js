import React, { Component } from "react";
import axios from "../../axios-cars";

class EditScreen extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
    if (data.make != null && data.model != null) {
      data.id = Math.random();
      axios.post("/caritems.json", data);
    } else {
      return;
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { vehicle } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="make"
            placeholder="Enter vehicle make..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="model"
            placeholder="Enter vehicle model..."
            onChange={this.handleInput}
            value={vehicle}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.props.closed}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default EditScreen;
