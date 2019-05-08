import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from "./Accountinfo";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
 class Profit extends Component{
Info = new Accountinfo();
  Auth = new AuthHelperMethods();

    state ={
    email: "",
    item:[],
    profits:[]

};
calculation =(arr) =>{
    let length = arr.length-1;
    let total=0;
    if(arr.length !==0){
    for(let i =0; i<arr.length;i++){
       total = total + arr[i].profit
    }
    
   
    let sdate =arr[0].createdAt[0] + arr[0].createdAt[1] +arr[0].createdAt[2]+arr[0].createdAt[3]+arr[0].createdAt[4]+arr[0].createdAt[5]+arr[0].createdAt[6]+arr[0].createdAt[7]+arr[0].createdAt[8]+arr[0].createdAt[9]
    let fdate =arr[length].createdAt[0] + arr[length].createdAt[1] +arr[length].createdAt[2]+arr[length].createdAt[3]+arr[length].createdAt[4]+arr[length].createdAt[5]+arr[length].createdAt[6]+arr[length].createdAt[7]+arr[length].createdAt[8]+arr[length].createdAt[9]
    
    this.setState({item:  [
        {profit:total,start:sdate, end:fdate},
      ]
    });
}
else{
    this.setState({item:  [
        {profit:total,start:"none", end:"none"},
      ]
})
}
   console.log(this.state.item)
}
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
    console.log(this.Auth.getToken())
    const menu = {
      owner: ""
    };
    axios
    .post('http://localhost:7000/getprofits',{
    email:this.Info.getEmail()
    },
    
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
    }
  })
    .then(res => {
     
        
       this.calculation(res.data)
       

});
};
render(){
    return(
        console.log("S" + this.state.item),
        <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Show Profit!</h2>
          
          <button onClick={this.handleSubmit2}>Show</button>
        </MuiThemeProvider>
        
        <ul>
        
        {this.state.item.map(item=> <li key ={item.id}>{"Total Profits: $"}{item.profit}{<br/>} {" from: "}{item.start}{" to: "}{item.end}</li>)}
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
export default withRouter(Profit);