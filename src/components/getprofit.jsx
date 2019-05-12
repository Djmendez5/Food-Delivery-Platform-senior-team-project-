import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from './Accountinfo';
class getreview extends Component{
    Auth = new AuthHelperMethods();
    state = {
        maker:"",
      item: "",
     profit:[]
    };
    
    add_profit =(arr,maker,quantity)=>{
      console.log(arr)
        let profit = arr.info["price"] - arr.info["cost"]
        profit = profit * quantity
        
    axios.post('http://localhost:7000/profit',{
    item:this.state.item,
    email:maker,
    profit: profit
    },
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
      }
    }
    )
    }  

  componentDidMount = (item,maker,quantity) =>{ 
      this.state.maker =maker;  
        this.state.item = item;
  
      
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
        
          this.add_profit(res.data,maker,quantity);
            
  
  });
 
  };
  render(){
      return(
          console.log( this.reviews.length)
      )
  }
  }
  const styles = {};
  
  styles.placeCenter = {
    position: "absolute",
    left: "40%",
    paddingTop: "200px"
  }
  export default getreview;