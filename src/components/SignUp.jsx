import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";
import { Link, withRouter } from "react-router-dom";
class PersonInput extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    phone: ""
  };

  handleSubmit = event => {
    
    event.preventDefault();
    alert("name: " + this.state.firstname);
    const user = {
      firstname: "",
      lastname: "",
      username:"",
      password: "",
      email: "",
      phone: ""
    };

    console.log(user);

    axios
      .post("http://localhost:7000/signup", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        phone:this.state.phone,
        password: this.state.password,
        email: this.state.email,
        isRestaurant: false
      })
      .then(res => {
        // name: res.data;
        console.log(res.data);
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>

          {}
          <TextField
            type="firstname"
            hintText="Enter your Firstname"
            floatingLabelText="Firstname"
            onChange={e => {
              this.setState({ firstname: e.target.value });
            }}
          />
          
          <TextField
            type="lastname"
            hintText="Enter your Lastname"
            floatingLabelText="Lastname"
            onChange={e => {
              this.setState({ lastname: e.target.value });
            }}
          />
          <br />
          <TextField
            type="username"
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <TextField
            type="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <TextField
            type="phone"
            hintText="Enter your Phone number"
            floatingLabelText="Phone number"
            onChange={e => {
              this.setState({ phone: e.target.value });
            }}
          />
          <br />

          <button onClick={this.handleSubmit}>Sign Up</button>
        </MuiThemeProvider>
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

//export default PersonInput;
export default withRouter(PersonInput);