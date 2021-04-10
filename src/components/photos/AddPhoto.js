import React, { Component } from "react";
import axios from "axios";
import * as service from "../service";

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
      .post("http://localhost:5000/photos", this.state, {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({ year: "", imageUrl: "" });
      })
      .catch((err) => console.log(err));

    // service
    //   .saveNewThing(this.state)
    //   .then((res) => {
    //     console.log("added: ", res);
    //     // here you would redirect to some other page
    //   })
    //   .catch((err) => {
    //     console.log("Error while adding the thing: ", err);
    //   });
  };

  handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    service
      .handleUpload(uploadData)
      .then((response) => {
        this.setState({ imageUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
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

          <label>
            Picture:
            <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
