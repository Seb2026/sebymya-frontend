import React, { Component } from "react";
import axios from "axios";

export default class AddPhoto extends Component {
  state = {
    year: "",
    imageUrl: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const year = this.state.year;
    console.log("----> state", this.state);
    axios
      .post("http://localhost:5000/photos", this.state)
      .then(() => {
        this.setState({ year: "" });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Year:
            <input
              type="number"
              min="0"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
