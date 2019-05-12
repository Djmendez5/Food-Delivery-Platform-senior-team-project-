import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";
import "./Home.css";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from './Accountinfo';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
    
class AddPic extends React.Component {
    Info = new Accountinfo();
Auth = new AuthHelperMethods();
  state = {
      item:"",
      filename:"",
    selectedFile: null
  };
  fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  handleSubmit2 =event =>{
    event.preventDefault();
    console.log(this.Info.getisRestaurant())
    if(this.Auth.getToken()===null){
      alert("please log in ")
      this.props.history.replace("/login");
    
    }
    else if(this.Info.getisRestaurant()==="false"){
      alert("please log in as a Restaurant")
      this.props.history.replace("/login");
    }
    else{
      this.handleSubmit()
    }
  }

  handleSubmit = event =>{
    let pic= this.state.filename
    var link = `https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/${pic}.jpg`
      console.log(this.state.filename)
      axios
      .put("http://localhost:7000/addPicture", {
        item: this.state.item,
        picture: link
        
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      }
      )
      .then(res => {
        // name: res.data;
        //console.log(res.data);
      })
      
  };



  

  fileUploadHandler = () => {
    const fd = new FormData();
   
    var CLOUDINARY_UPLOAD_PRESET = 'k3nwpe0l';
    fd.append('file', this.state.selectedFile);
    fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    axios.post("https://api.cloudinary.com/v1_1/fooddelivery/image/upload", fd)
        .then(res => {
            this.setState({filename: res.data.public_id });
            
        })
        .catch(err => {
            console.log(err);
        });
  };

  render() {
    return (
     
      <div style={styles.placeCenter}> 
      <input type="file" onChange={this.fileSelectedHandler} />
        <br/>
        <br/>
        <button onClick={this.fileUploadHandler}> Upload </button>
        <br/>
        <br/>
        <MuiThemeProvider onSubmit={this.handleSubmit}>
         

          {}
          <TextField
            type="item"
            hintText="Enter the item name"
            floatingLabelText="Item"
            onChange={e => {
              this.setState({item: e.target.value });
            }}
          />
          
          </MuiThemeProvider>
          <br/>
        <br/>
        
        <button onClick={this.handleSubmit2}> select the item</button>
        
        
      </div>
      
    );
  }
}
const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "200px"
}
export default withRouter(AddPic);
