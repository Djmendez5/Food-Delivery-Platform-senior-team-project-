import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";

class Menuitem extends Component {
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
    alert("name: " + this.state.title);
    const order= {
      name: "",
      item: "",
      price: "",
      quantity:"",
      email: "",
      maker: ""
    };

    console.log(order);

    axios
      .post("http://localhost:7000/addOrder", {
        name: this.state.name,
        item: this.state.item,
        price: parseInt(this.state.price),
        quantity:parseInt(this.state.quantity),
        email:this.state.email,
        maker: this.state.maker
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
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Add Order item</h2>

          {}
          <TextField
            type="name of buyer "
            hintText="Enter the name of the buyer"
            floatingLabelText="buyer name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          
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
            type="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={e => {
              this.setState({ email: e.target.value });
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
  paddingTop: "200px"
}

export default Menuitem;
