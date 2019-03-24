import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
 class Menulist extends Component{


    state ={
    email: "",
    item:[]
};

handleSubmit = event => {
    event.preventDefault();
    alert("owner: " + this.state.email);
    const menu = {
      owner: ""
    };

    axios
    .post('http://localhost:7000/getmenuinfo',{
    email:this.state.email
    
    
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
        {this.state.item.map(menu=> <li key ={menu.id}>{"Name:"}{menu.title}{<br/>}{"Description: "}{menu.description}{<br/>}{"Nutritional info: "}{menu.nutrition_info}{<br/>}{"Price: $"}{menu.price}{<br/>}{"owner: "}{menu.owner}</li>)}
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