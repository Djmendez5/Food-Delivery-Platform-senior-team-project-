import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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
class Restaurants extends Component {
  Info = new Accountinfo();
  Auth = new AuthHelperMethods();
  state = {
    license:"",
    name: "",
    description: "",
    email: "",
    hours: "",
    contact_info: "",
    website: "",
    address:"",
    city:""
  };
  handleSubmit2 =event =>{
    event.preventDefault();
    if(this.Auth.getToken()===null){
      alert("please log in")
      this.props.history.replace("/login");
    }
    else{
      this.handleSubmit()
    }
  }
  handleSubmit = event => {
    axios.put("http://localhost:7000/isRestaurant",{
      username: this.Info.getUsername()

    },
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
      }
    })
    
   
    const rest = {
      license:"",
        name: "",
        description: "",
        email: "",
        hours: "",
        contact_info: "",
        website: "",
        address:"",
        city:""
    };
    

    axios
      .post("http://localhost:7000/addRestaurant", {
        license:this.state.license,
        name: this.state.name,
        description: this.state.description,
        email: this.Info.getEmail(),
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
        
        
        //console.log(res.data);
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Register your Restaurant</h2>

          {}
          <h4>please notice your account email will be used as the email for your restaurant</h4>
          <TextField
            type="license"
            hintText="Enter the license number"
            floatingLabelText="license"
            onChange={e => {
              this.setState({license: e.target.value });
            }}
          />
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

          <button onClick={this.handleSubmit2}>Sign Up</button>
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

export default withRouter(Restaurants);
