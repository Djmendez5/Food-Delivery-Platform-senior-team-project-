import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";
import getprofit from './getprofit';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
 class Cart extends Component{
   Prof = new getprofit();
Info = new Accountinfo();
  Auth = new AuthHelperMethods();

    state ={
    email: "",
    item:[],
    profits:[]

};

componentDidMount(){
    //make sure the token is legit 
    if(this.Auth.getToken()===null){
      alert("please log in ")
      this.props.history.replace("/login");
    
    }
    else{
      this.handleSubmit()
    }
  }

  handleSubmit5 =ev =>{
    //if they decided to delete an item from the cart it will delete it here

      let itemname = String(ev.currentTarget.name);

    axios.delete('http://localhost:7000/removeCartItem',{
      //unlike POST and GET, DELETE requires that format to send info
        data:{item: itemname }
        
    })
  .then(res => {
    //will alert the user with "deleted 'item'"
alert(res.data)
  })
  }
  handleSubmit6 =ev =>{
      let total =0;
      //if checked out add every item in the list to an order, add the
      //prices and display them 
      for(let i=0;i<this.state.item.length;i++){
          this.quickAdd(this.state.item[i].item, this.state.item[i].owner,1,this.state.item[i].price)
          total =total + this.state.item[i].price
      }
      console.log(total)
console.log(this.state.item)  
};
//makes an order for every item including sending an email to each chef
quickAdd=(item, maker, quantity,price)=>{
    axios
    .post("http://localhost:7000/addOrder", {
      //get the name and email from the local storage 
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
    this.Prof.componentDidMount(item,maker,quantity)
    alert("Your total: "+ (price * quantity))
  };
  
handleSubmit = event => {
    console.log(this.Auth.getToken())
    const menu = {
      owner: ""
    };
    axios
    .post('http://localhost:7000/showCart',{
    email:this.Info.getEmail()
    },
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
    }
  })
    .then(res => {
        this.setState({item: res.data});
       console.log(res.data)
       

});
};
render(){
    return(
        <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Show Cart</h2>
          
          <button onClick={this.handleSubmit}>Update</button>
        </MuiThemeProvider>
        
        <ul>
        
        {this.state.item.map(item=> <li key ={item.id}>{"Item name: "}{item.item}{<br/>} {"price: "}{item.price}{<br/>} {" owner:  "}{item.owner}
        <button name={item.item} id={item.price} value={item.owner} onClick={this.handleSubmit5}>delete</button>
        </li>)}
        <button onClick={this.handleSubmit6}>Checkout!</button>
        </ul>
        </div>
    )
}
}
const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "200px"
}
export default withRouter(Cart);