import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import "./Home.css";

class PersonInput extends Component {
  Auth = new AuthHelperMethods();
  state = {
    firstname: "",
    lastname: "",
    username: "",
    phone:"",
    password: "",
    email: "",
    location: null
  };

  componentDidMount() {







  axios.post("http://localhost:7000/getUserLocation")
      .then(response => {
        console.log("dsad",response.data)
        localStorage.setItem('location', JSON.stringify(response.data))
      })
      //.then(response => {console.log("dsad",response.data)})
      .catch(err => console.log('error', err))
  }

  handleSubmit = event => {
    event.preventDefault();
    alert("name: " + this.state.firstname);
    const user = {
      firstname: "",
      lastname: "",
      username:"",
      phone: "",
      password: "",
      address:"",
      email: ""
      
    };

    console.log(this.Auth.getToken());

    axios
      .put("http://localhost:7000/editprofile", {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        phone:this.state.phone,
        password: this.state.password,
        address:this.state.address,
        email: this.state.email
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      }
      )
      .then(res => {
        // name: res.data;
        console.log(res.data);
      })
      
  };


  render() {
  console.log(this.state.location);
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2> Edit your profile if you'd like </h2>

          {}
          <TextField
            type="firstname"
            hintText="Enter your Firstname"
            floatingLabelText="Firstname"
            onChange={e => {
              this.setState({ firstname: e.target.value });
            }}
          />
          <br />
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
            hintText="Enter your username"
            floatingLabelText="username"
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <br />
          <TextField
            type="phone"
            hintText="Enter your phone number"
            floatingLabelText="phone"
            onChange={e => {
              this.setState({ phone: e.target.value });
            }}
          />
          <br />
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
            type="address"
            hintText="Enter your address"
            floatingLabelText="address"
            onChange={e => {
              this.setState({ address: e.target.value });
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
          <br />

          <button onClick={this.handleSubmit}> Edit Profile </button>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "100px"
}

export default PersonInput;