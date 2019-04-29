import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from './Accountinfo';

 class Menulist extends Component{
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();
    state ={
    email: "",
    item:[]
};

handleSubmit = event => {
    event.preventDefault();
    

    axios
    .post('http://localhost:7000/getorderhistory',{
    email:this.Info.getEmail()
    },
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
      }
    }
    )
    .then(res => {
     
        console.log(res.data);
            this.setState({item: res.data});

});
};
render(){
    return(
        <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Order History</h2>

          
          <br/>
          <button onClick={this.handleSubmit}>Show</button>
        </MuiThemeProvider>
        <ul>
        {this.state.item.map(orders=> <li key ={orders.id}>{"Name:"}{orders.item}{<br/>}{"Price: $"}{orders.price}{<br/>}{"quantity: "}{orders.quantity}{<br/>}{"maker: "}{orders.maker}</li>)}
        </ul>
        </div>
    )
}
}
const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "100px"
}
export default Menulist;