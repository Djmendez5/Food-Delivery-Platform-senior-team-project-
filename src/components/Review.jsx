import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import "./Home.css";
import Accountinfo from "./Accountinfo";
import getreview from './getreview'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class PersonInput extends Component {
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();
  Rev = new getreview();
  state = {
    item: "",
    customer: "",
    customer_review: "",
    price:"",
    owner: ""
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
    console.log(this.Auth.getToken())
   
    
    
    const user = {
        item: "",
        customer: "",
        customer_review: "",
        price:"",
        owner: ""
    };
    this.Rev.componentDidMount(this.state.item)

    

    axios
      .post("http://localhost:7000/review", {
        item: this.state.item,
        customer: this.Info.getUsername(),
        customer_review: parseInt(this.state.customer_review),
        
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


  render() {
 // console.log(this.state.location);
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2> Review! </h2>
          {}
          
          <TextField
            type="item"
            hintText="Enter the item name"
            floatingLabelText="Item"
            onChange={e => {
              this.setState({item: e.target.value });
            }}
          />
          <br />
          <TextField
            type="customer_review"
            hintText="Enter your rating out of 5"
            floatingLabelText="rating"
            onChange={e => {
              this.setState({ customer_review: e.target.value });
            }}
          />
          <br />

          <button onClick={this.handleSubmit2}> Submit rating</button>
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

export default withRouter(PersonInput);