import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
 class RestaurantList extends Component{


    state ={
    city: "",
    item:[]
};

handleSubmit = event => {
    event.preventDefault();
    alert("city: " + this.state.city);
    const restaurants = {
      city: ""
    };

    axios
    .post('http://localhost:7000/getrestaurants',{
    city:this.state.city
    
    
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
          <h2>List Restaurants</h2>

          {}
          <TextField
            type="Restaurant "
            hintText="Enter your city"
            floatingLabelText="city"
            onChange={e => {
              this.setState({ city: e.target.value });
            }}
          />
          <br/>
          <button onClick={this.handleSubmit}>Show</button>
        </MuiThemeProvider>
        <ul>
        {this.state.item.map(Restaurant=> <li key ={Restaurant.id}>{"Name:"}{Restaurant.name}{<br/>}{"Description: "}{Restaurant.description}{<br/>}{"email: "}{Restaurant.email}{<br/>}{"hours"}{Restaurant.hours}{<br/>}{"contact info: "}{Restaurant.contact_info}<br/>{"website: "}{Restaurant.website}<br/>{"address: "}{Restaurant.address}</li>)}
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
export default RestaurantList;