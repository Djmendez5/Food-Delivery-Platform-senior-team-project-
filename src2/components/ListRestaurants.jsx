import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import getprofit from './getprofit'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Accountinfo from './Accountinfo'
 class RestaurantList extends Component{
   Prof = new getprofit();
  Auth = new AuthHelperMethods();
  Info = new Accountinfo();

    state ={
    city: "",
    item:[],
    menu:[]
};
getCurrentCity =(arr)=>{

  //get the user's city 
  let city;
  for(let i =0; i< arr.length;i++){
    if(arr[i].types[0]==="postal_code"){
      city=(arr[i].formatted_address)
    }
  }
  city = city.substring(0,city.indexOf(","));
  //get all the restaurants in that city 
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
  
          this.setState({item: res.data});

});


}
//check if they are logged in 
handleSubmit4 =event =>{
  event.preventDefault();
  console.log(this.Auth.getToken())
  if(this.Auth.getToken()===null){
    alert("please log in")
    this.props.history.replace("/login");
  }
  else{
    this.handleSubmit2()
  }
}
handleSubmit2 = event => {
 //get city thing from the backend

  const location=JSON.parse(localStorage.getItem('location'))
  axios.post('http://localhost:7000/getAddress', location)
  .then(res=>this.getCurrentCity(res.data.results))
  
}
handleSubmit5=ev=>{
  //if a city is entered then simply look for the restaurants
  //in that city
  console.log(this.Auth.getToken())
  console.log(ev.currentTarget.value)
  axios
  .post('http://localhost:7000/getmenuinfo',{
  email:ev.currentTarget.value
  },
  
  {
    headers: {
      Authorization: 'Bearer ' + this.Auth.getToken()
  }
})
  .then(res => {
      console.log(res.data);
          this.setState({menu: res.data});
});
};
  

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
handleSubmit11 =ev=>{
  axios.post("http://localhost:7000/addCart",{
    item:  ev.currentTarget.name,
    name:this.Info.getName(),
    email:this.Info.getEmail(),
    price:ev.currentTarget.id,
    owner: ev.currentTarget.value
  },
  {
    headers: {
      Authorization: 'Bearer ' + this.Auth.getToken()
    }
  }
  ).then(res => {
     
    console.log(res)
  });
  console.log(this.Info.getEmail(),ev.currentTarget.name, ev.currentTarget.value,ev.currentTarget.id)
}
handleSubmit10 =ev =>{
  
  this.quickAdd(ev.currentTarget.name, ev.currentTarget.value,1,ev.currentTarget.id)
}


quickAdd=(item, maker, quantity,price)=>{
  axios
  .post("http://localhost:7000/addOrder", {
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
  console.log("menu"+this.state.menu)
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
        {this.state.item.map(Restaurant=> <li key ={Restaurant.id}>{"Name:"}{Restaurant.name}{<br/>}{"Description: "}{Restaurant.description}{<br/>}{"email: "}{Restaurant.email}{<br/>}{"hours"}{Restaurant.hours}{<br/>}{"contact info: "}{Restaurant.contact_info}<br/>{"website: "}{Restaurant.website}<br/>{"address: "}{Restaurant.address}<br/> 
        <button name={Restaurant.name} value={Restaurant.email} onClick={this.handleSubmit5}>Show menu!</button>
        </li>)}
        {this.state.menu.map(menu=> <li key ={menu.id}>{"Name:"}{menu.item}{<br/>}{"Description: "}{menu.description}{<br/>}{"Nutritional info: "}{menu.nutrition_info}{<br/>}{"Price: $"}{menu.price}{<br/>}{"maker email: "}{menu.owner}<br/>{"Rating :"}{menu.review} <br/><img src = {menu.picture} height="200" width="200" /><br/>
         <button name={menu.item} id={menu.price} value={menu.owner} onClick={this.handleSubmit10}>Quick order!</button>
         <button name={menu.item} id={menu.price} value={menu.owner} onClick={this.handleSubmit11}>Add to Cart!</button></li>)}
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