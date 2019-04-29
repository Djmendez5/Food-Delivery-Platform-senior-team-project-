import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
 class Menulist extends Component{
  Auth = new AuthHelperMethods();

    state ={
    email: "",
    item:[]
};

handleSubmit = event => {
  
    event.preventDefault();
    console.log(this.Auth.getToken())
    alert("owner: " + this.state.email);
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
          <button onClick={this.handleSubmit}>Show</button>
        </MuiThemeProvider>
        <ul>
        {this.state.item.map(menu=> <li key ={menu.id}>{"Name:"}{menu.item}{<br/>}{"Description: "}{menu.description}{<br/>}{"Nutritional info: "}{menu.nutrition_info}{<br/>}{"Price: $"}{menu.price}{<br/>}{"maker email: "}{menu.owner} <br/><img src = {menu.picture}  /></li>)}
        
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
export default Menulist;