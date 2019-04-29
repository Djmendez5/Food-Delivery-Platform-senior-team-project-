import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";
class Menuitem extends Component {
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();
  
  state = {
    name: "",
    item: "",
    price: "",
    quantity:"",
    email: "",
    maker: ""
  };

  handleSubmit = event => {
  
    event.preventDefault();

    axios
      .post("http://localhost:7000/addOrder", {
        name: this.Info.getName(),
        item: this.state.item,
        price: parseInt(this.state.price),
        quantity: parseInt(this.state.quantity),
        email:this.Info.getEmail(),
        maker: this.state.maker
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      }
      )
      .then(res => {
         
        console.log(res.data);
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Add Order item</h2>

          {}
          
          
          <TextField
            type="Dish name"
            hintText="Enter the name of the dish"
            floatingLabelText="name of dish"
            onChange={e => {
              this.setState({ item: e.target.value });
            }}
          />
          <br />
          <TextField
            type="quantity"
            hintText="Enter the quantity"
            floatingLabelText="quantity"
            onChange={e => {
              this.setState({ quantity: e.target.value });
            }}
          />
          <TextField
            type="price"
            hintText="Enter the price"
            floatingLabelText="price"
            onChange={e => {
              this.setState({ price: e.target.value });
            }}
          />
          
          
          <br />
          <TextField
            type="maker"
            hintText="Enter  the maker"
            floatingLabelText="maker"
            onChange={e => {
              this.setState({ maker: e.target.value });
            }}
          />
          <br/>
          <button onClick={this.handleSubmit}>Add</button>
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
export default Menuitem;