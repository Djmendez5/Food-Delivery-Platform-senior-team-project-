import React, { Component } from "react";
import "./Home.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Switch } from "react-router";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Profile from "./Profile";
import { Column, Row } from "simple-flexbox";
import Home from './Home'
import AppBar from 'material-ui/AppBar';
import axios from 'axios';
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";

class Signin extends Component {
  info = new Accountinfo();
  Auth = new AuthHelperMethods();
  state = {  
    username: "",
  password: ""
  };

  logincheck = {
    cart: []
  }
  _handleChange = (e) => {
    //console.log(e.targer.value);
    this.setState(
        {
          
            [e.target.name]: e.target.value
        }
    )
}
handleFormSubmit = (e) => {
  
  
  e.preventDefault();
  
  this.Auth.login(this.state.username, this.state.password)
  this.info.loggedin(this.state.username)
  this.props.history.push("/profile");
  /*
  .then(res => {
    if (res === false) {
      return alert("Sorry those credentials don't exist!");
    }
    this.props.history.replace("/");
  })
  .catch(err => {
    alert(err);
  });
  */
};

  /*constructor(props) {
    super(props);
    var loginButtons = [];
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
    };
  } */

  

  render() {
    
    return (
      <MuiThemeProvider onSubmit={this.handleFormSubmit}>
        <div style={styles.placeCenter}>
            
          <h2> Sign in </h2>
          <TextField
            type="username"
            hintText="Enter your Username"
            floatingLabelText="Username"
            //onChange={this._handleChange}
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
            
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            //onChange={this._handleChange}
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
            
          />
          <br />
          <button onClick={this.handleFormSubmit}>Log in</button>
        </div>
        </MuiThemeProvider>
    );
  }
}


const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "100px"
};


//export default Signin;
export default withRouter(Signin);