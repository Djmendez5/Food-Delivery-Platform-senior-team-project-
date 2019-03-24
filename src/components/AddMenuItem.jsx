import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import Button from "material-ui/FlatButton"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";

class Menuitem extends Component {
  state = {
    tile: "",
    description: "",
    nutrition_info: "",
    price: "",
    email: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("name: " + this.state.title);
    const user = {
      title: "",
      description: "",
      nutrition_info:"",
      price: "",
      owner: ""
    };

    console.log(user);

    axios
      .post("http://localhost:7000/additem", {
        title: this.state.title,
        description: this.state.description,
        nutrition_info: this.state.nutrition_info,
        price:parseInt(this.state.price),
        owner: this.state.email
      })
      .then(res => {
          //console.log("asdsadsa")
        // name: res.data;
        console.log(res.data);
      });
  };

  render() {
    return (
      <div style={styles.placeCenter}> 
        <MuiThemeProvider>
        <form onSubmit={this.handleSubmit}>
          <h2>Add Menu Item</h2>

          {}
          <TextField
            type="text"
            hintText="Enter the name of the item"
            floatingLabelText="item name"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          
          <TextField
            type="text"
            hintText="Enter the item description"
            floatingLabelText="description"
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
          />
          <br />
          <TextField
            type="text"
            hintText="Enter the nutriotinal info"
            floatingLabelText="nutritional info"
            onChange={e => {
              console.log('changing', this.state.nutrition_info)
              this.setState({ nutrition_info: e.target.value });
            }}
          />
          <TextField
            type="text"
            hintText="Enter your price"
            floatingLabelText="price"
            onChange={e => {
              this.setState({ price: e.target.value });
            }}
          />
          <br />
          <TextField
            type="text"
            
            hintText="Enter your Email"
            floatingLabelText="Email/owner"
            onChange={e => {
              this.setState({ owner: e.target.value });
            }}
          />
          <br/>
          <Button type="submit"> Add </Button>
          </form>
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

export default Menuitem;
