import React, { Component } from "react";
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./Home.css";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";
import getprofit from "./getprofit";
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
  Prof = new getprofit();
  
  state = {
    name: "",
    item: "",
    price: "",
    quantity:"",
    email: "",
    maker: ""
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

  
quickAdd=(item, maker, quantity,price)=>{
  axios
  .post("http://localhost:7000/addOrder", {
    name: this.Info.getName(),
    item: item,
    price: parseInt(price),
    quantity: parseInt(quantity),
    email:this.Info.getEmail(),
    maker:maker
  },
  {
    headers: {
      Authorization: 'Bearer ' + this.Auth.getToken()
    }
  }
  )
  .then(res => {
     
    console.log("order has been added")
  });
  
  alert("Your total: "+ (price * this.state.quantity))
};



  

  handleSubmit = event => {
    
    this.Prof.componentDidMount(this.state.item,this.state.maker,this.state.quantity)
  var price2 =0;
    //event.preventDefault();
    axios
    .post('http://localhost:7000/getCostPrice',{
    item:this.state.item,
    },
    {
      
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
      }
    })
    .then(res => {
          
          price2= res.data.info.price;
        console.log(price2)
        this.add(price2);
          
});

  }
  add = (price)=>{
    axios
      .post("http://localhost:7000/addOrder", {
        name: this.Info.getName(),
        item: this.state.item,
        price: parseInt(price),
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
         
        console.log("order has been added")
      });
      
      alert("Your total: "+ (price * this.state.quantity))
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

//export default Menuitem;
export default withRouter(Menuitem);