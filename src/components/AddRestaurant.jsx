import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";
import AuthHelperMethods from './AuthHelperMethods';
class Restaurants extends Component {
  Auth = new AuthHelperMethods();
  state = {
    name: "",
    description: "",
    email: "",
    hours: "",
    contact_info: "",
    website: "",
    address:"",
    city:""
  };
  
  handleSubmit = event => {
    event.preventDefault();
    alert("name: " + this.state.name);
    const rest = {
        name: "",
        description: "",
        email: "",
        hours: "",
        contact_info: "",
        website: "",
        address:"",
        city:""
    };

    console.log(rest);

    axios
      .post("http://localhost:7000/addRestaurant", {
        name: this.state.name,
        description: this.state.description,
        email: this.state.email,
        hours:this.state.hours,
        contact_info: this.state.contact_info,
        website: this.state.website,
        address:this.state.address,
        city:this.state.city
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      })
      .then(res => {
        // name: res.data;
        console.log(res.data);
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Register your Restaurant</h2>

          {}
          <TextField
            type="name"
            hintText="Enter the name"
            floatingLabelText="name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          
          <TextField
            type="description"
            hintText="Enter the description"
            floatingLabelText="description"
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
          <br />
          <TextField
            type="email"
            hintText="Enter the email"
            floatingLabelText="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <TextField
            type="hours"
            hintText="Enter your hours of operation"
            floatingLabelText="hours"
            onChange={e => {
              this.setState({ hours: e.target.value });
            }}
          />
          <br />
          <TextField
            type="contact information"
            hintText="Enter your contact information"
            floatingLabelText="contact information"
            onChange={e => {
              this.setState({ contact_info: e.target.value });
            }}
          />
          <TextField
            type="website"
            hintText="Enter your website"
            floatingLabelText="website"
            onChange={e => {
              this.setState({ website: e.target.value });
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
            type="city"
            hintText="Enter the city"
            floatingLabelText="city"
            onChange={e => {
              this.setState({ city: e.target.value });
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
  paddingTop: "100px"
}

export default Restaurants;