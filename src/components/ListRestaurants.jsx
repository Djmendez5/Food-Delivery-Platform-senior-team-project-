import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
 class RestaurantList extends Component{
  Auth = new AuthHelperMethods();

    state ={
    city: "",
    item:[]
};
getCurrentCity =(arr)=>{
  let city;
  
  for(let i =0; i< arr.length;i++){
    if(arr[i].types[0]==="postal_code"){
      city=(arr[i].formatted_address)
    }
  }
  city = city.substring(0,city.indexOf(","));
console.log(city)
  axios
  .post('http://localhost:7000/getrestaurants',{
  city:city
  
  
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


}
handleSubmit2 = event => {
 

  const location=JSON.parse(localStorage.getItem('location'))
  axios.post('http://localhost:7000/getAddress', location)
  .then(res=>this.getCurrentCity(res.data.results))
  
}

handleSubmit = event => {
    event.preventDefault();
   
    const restaurants = {
      city: ""
    };

    axios
    .post('http://localhost:7000/getrestaurants',{
    city:this.state.city
    
    
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
        <br/>
        <button onClick={this.handleSubmit2}>Show Near Me!</button>
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