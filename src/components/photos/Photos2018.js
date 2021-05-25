import React, { Component } from "react";
import axios from "axios";

export default class Photos2018 extends Component {
  state = {
    listOfPhotos: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/photogallery").then((response) => {
      this.setState({
        listOfPhotos: response.data,
      });
    });
  }

  showAllPhotos = () => {
    return this.state.listOfPhotos.map((eachPhoto) => {
      if (eachPhoto.year === "2018")
        return (
          <div key={eachPhoto._id}>
            <span>{eachPhoto.year}</span>
            <br />
            <img
              width="100px"
              src={eachPhoto.imageUrl}
              alt="seb and mya photos"
            />
          </div>
        );
    });
  };

  render() {
    return (
      <div>
        <h2>All Photos</h2>
        {this.showAllPhotos()}
      </div>
    );
  }
}
