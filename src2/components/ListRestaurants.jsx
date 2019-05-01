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
import Accountinfo from './Accountinfo'
 class RestaurantList extends Component{
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();

    state ={
    city: "",
    item:[]
};
getCurrentCity =(arr)=>{
  let city;
  //console.log(arr)
  for(let i =0; i< arr.length;i++){
    if(arr[i].types[0]==="postal_code"){
      city=(arr[i].formatted_address)
    }
  }
  city = city.substring(0,city.indexOf(","));
//console.log(city)
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
handleSubmit4 =event =>{
  event.preventDefault();
  if(this.Auth.getToken()===null){
    alert("please log in")
    this.props.history.replace("/login");
  }
  else{
    this.handleSubmit2()
  }
}
handleSubmit2 = event => {
 

  const location=JSON.parse(localStorage.getItem('location'))
  axios.post('http://localhost:7000/getAddress', location)
  .then(res=>this.getCurrentCity(res.data.results))
  
}
handleSubmit3=event =>{
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
    //event.preventDefault();
   
    
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
if(this.state.item.length ===0){
  alert("That city is not correct");
}

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
          <button onClick={this.handleSubmit3}>Show</button>
        </MuiThemeProvider>
        <ul>
        {this.state.item.map(Restaurant=> <li key ={Restaurant.id}>{"Name:"}{Restaurant.name}{<br/>}{"Description: "}{Restaurant.description}{<br/>}{"email: "}{Restaurant.email}{<br/>}{"hours"}{Restaurant.hours}{<br/>}{"contact info: "}{Restaurant.contact_info}<br/>{"website: "}{Restaurant.website}<br/>{"address: "}{Restaurant.address}</li>)}
        </ul>
        <br/>
        <button onClick={this.handleSubmit4}>Show Near Me!</button>
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
export default withRouter(RestaurantList);