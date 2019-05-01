import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";
import "./Home.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
  

class Menuitem extends Component {
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();
  state = {
   item: "",
    description: "",
    nutrition_info: "",
    price: "",
    email: ""
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
  handleSubmit = event => {
    //event.preventDefault();
    alert("name: " + this.state.item);
    const user = {
      item: "",
      description: "",
      nutrition_info:"",
      price: "",
      owner: ""
    };

    console.log(user);

    axios
      .post("http://localhost:7000/additem", {
        item: this.state.item,
        description: this.state.description,
        nutrition_info: this.state.nutrition_info,
        price:parseInt(this.state.price),
        cost:parseInt(this.state.cost),
        owner: this.state.owner,
        picture:"https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/x6vuu1a027pnkffq0x9c.jpg"
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      }
      )
      
      .then(res => {
          //console.log("asdsadsa")
        // name: res.data;
        console.log(res.data);
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Add Menu Item</h2>

          {}
          <TextField
            type="name of item "
            hintText="Enter the name of the item"
            floatingLabelText="item name"
            onChange={e => {
              this.setState({ item: e.target.value });
            }}
          />
          
          <TextField
            type="description"
            hintText="Enter the item description"
            floatingLabelText="description"
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
          <br />
          <TextField
            type="nutrition_info"
            hintText="Enter the nutriotinal info"
            floatingLabelText="nutritional info"
            onChange={e => {
              this.setState({ nutrition_info: e.target.value });
            }}
          />
          <TextField
            type="price"
            hintText="Enter your price"
            floatingLabelText="price"
            onChange={e => {
              this.setState({ price: e.target.value });
            }}
          />
          <TextField
            type="cost"
            hintText="Enter the cost of producing the item"
            floatingLabelText="cost"
            onChange={e => {
              this.setState({ cost: e.target.value });
            }}
          />
          <br />
          <TextField
            type="owner"
            hintText="Enter your Email"
            floatingLabelText="Email/owner"
            onChange={e => {
              this.setState({ owner: e.target.value });
            }}
          />
          <br/>
          <button onClick={this.handleSubmit2}>Add</button>
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

export default withRouter(Menuitem);
