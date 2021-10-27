import React, { Component } from "react";
import Clarifai from "clarifai";
import ImageSearchForm from '../pages/ImageSearchForm';
import FaceDetect from '../pages/FaceDetect';
import "../CSS/Face.css";


const face = new Clarifai.App({
  apiKey: "de9ac5f9ecf4485dabf3dfa6b4c4ed9f",
});


class Face extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},  
    };
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };


  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    face.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
    
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
     
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <ImageSearchForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
      
        <FaceDetect box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
export default Face;
