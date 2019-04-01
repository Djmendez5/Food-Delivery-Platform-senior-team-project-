
 import React, { Component } from "react";
 import './Home.css';
 import Signup from './SignUp'
 import {
     BrowserRouter as Router,
     Route,
     Link,
     Redirect,
     withRouter
   } from "react-router-dom";
 import { Switch } from 'react-router'
 import TextField from 'material-ui/TextField';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import Profile from './Profile'
 import { Column, Row } from 'simple-flexbox';
 import Login from './Login'
 import AddMenuItem from './AddMenuItem.jsx'
 import DisplayMenu from './DisplayMenu'
 import AddRestaurant from './AddRestaurant'
 import ListRestaurants from './ListRestaurants'
 import AddOrder from './AddOrder'
 import OrderHistory from './OrderHistory'
 import Chip from '@material-ui/core/Chip';

  
 function App() {
   return (
     <Router>
       <div>
         <Header />
         <Route path="/login"  component={Signin} />
         <Route path="/signup" component={Topics} />
         <Route exact path="/" component={Home} />
         <Route path="/profile" component={goProfile} />
         <Route path="/addmenuitem" component={addMenu}/>
         <Route path="/displaymenu" component={displayMenu}/>
         <Route path="/addrestaurant" component={AddRestaurant}/>
         <Route path="/listrestaurants" component={ListRestaurants}/>
         <Route path="/addorder" component={AddOrder}/>
         <Route path="/orderhistory" component={OrderHistory}/>
         {/* <AuthButton /> */}
       </div>
     </Router>
   );
 }
 
 function goProfile() {
   return (
     <Profile />
   );
 }
 
 function Home() {
   console.log("Hello");
   return (
     <h2 className="food-Image" style={styles.welcome}>Welcome to RunningFood</h2>
   );
 }
 
 function Signin() {
   return (
     <Login />
   );
 }
 
 function addMenu({ match }){
   return (
     <AddMenuItem/>
   );
   }
   function addOrder({ match }){
    return (
      <AddOrder/>
    );
    }
    function orderhistory({match}){
      return(
        <OrderHistory/>
      );
    }
 
 function displayMenu({ match }) {
   return (
     <DisplayMenu />
   );
 }
 function addRestaurant({ match }) {
   return (
     <AddRestaurant />
   );
 }
 function listRestaurants({ match }) {
   return (
     <ListRestaurants />
   );
 }
 
 function Topics({ match }) {
     return (
         <Signup/>  
     );
 }
 
const styles = {};

styles.mainButton = {
  // position: "absolute",
  fontSize: "50px",
  color: "red",
  attachment: "fixed",
  backgroundColor: 'orange',
  fontWeight: 'bold'
}

styles.loginButton = {
  // position: "absolute",
  // left: "25%",
  fontSize: "20px",
  color: "red",
  padding: 40,
  fontWeight: 'bold'
}

styles.signupButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "red",
  padding: 40,
  fontWeight: 'bold'
}

styles.welcome = {
  paddingTop: "50px"
}

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "150px"
}

styles.profileButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green",
}
styles.addmenuButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green",
}
styles.addrestaurantButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green",
}
styles.listrestaurantsButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green",
}
 function Header() {
   return (
     <ul>
       <Column flexGrow={0}>
         <Row horizontal='center' alignSelf='center'>
           <Link to="/" className="btn">
             <button className="btn" style={styles.mainButton}> 
                RunningFood 
             </button>
           </Link>
           <Column flexGrow={0}>
             <Link to="/login" style={styles.loginButton}>
                Login
             </Link>
           </Column>
           <Column flexGrow={0}>
             <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
           </Column>
         </Row>
         <Row horizontal='start'>
           {/* <Column flexGrow={0.05}>
             <Link to="/login" style={styles.loginButton}>Login</Link>
           </Column>
           <Column flexGrow={0.05}>
             <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
           </Column> */}
           <Column flexGrow={0.05}>
             <Link to="/profile" style={styles.profileButton}>Profile</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/addmenuitem" style ={styles.addmenuButton}>Add Menu Item</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/displaymenu" style ={styles.addmenuButton}>Show menu</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/addrestaurant" style ={styles.addrestaurantButton}>Add restaurant</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/listrestaurants" style ={styles.listrestaurantsButton}>Find restaurants</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/addorder" style ={styles.listrestaurantsButton}>Add orders</Link>
           </Column>
           <Column flexGrow={0.05} horizontal='space-between'>
           <Link to="/orderhistory" style ={styles.listrestaurantsButton}>Order History</Link>
           </Column>
         </Row>
       </Column>
     </ul>
   );
 }
 
 
 
 export default App;
