import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
 class Menulist extends Component{
  Auth = new AuthHelperMethods();

    state ={
    email: "",
    item:[]
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
    
    const menu = {
      owner: ""
    };
    axios
    .post('http://localhost:7000/getmenuinfo',{
    email:this.state.email
    },
    
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
    }
  })
    .then(res => {
     
        console.log(res.data);
            this.setState({item: res.data});

});

};
render(){
    return(
      
        <div style={styles.placeCenter}> 
        <MuiThemeProvider onSubmit={this.handleSubmit}>
          <h2>Show Menu</h2>
          
          {}
          <TextField
            type="Restaurant "
            hintText="Enter the restaurant email"
            floatingLabelText="email"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
          />
          <br/>
          <button onClick={this.handleSubmit2}>Show</button>
        </MuiThemeProvider>
        <ul>
        {this.state.item.map(menu=> <li key ={menu.id}>{"Name:"}{menu.item}{<br/>}{"Description: "}{menu.description}{<br/>}{"Nutritional info: "}{menu.nutrition_info}{<br/>}{"Price: $"}{menu.price}{<br/>}{"maker email: "}{menu.owner}<br/>{"Rating :"}{menu.review} <br/><img src = {menu.picture} height="200" width="200"  /></li>)}
        
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
export default withRouter(Menulist);