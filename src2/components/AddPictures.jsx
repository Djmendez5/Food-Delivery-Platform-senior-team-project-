import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";

class AddPic extends React.Component {

  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    var CLOUDINARY_UPLOAD_PRESET = 'k3nwpe0l';
    fd.append('file', this.state.selectedFile);
    fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios.post("https://api.cloudinary.com/v1_1/fooddelivery/image/upload", fd)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}> Upload </button>
      </div>
    );
  }
}

export default AddPic;