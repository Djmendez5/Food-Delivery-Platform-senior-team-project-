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
    <h2 className="food-Image" style={styles.welcome}>Welcome to YeetFood</h2>
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

// paddingTop: "50px",

styles.mainButton = {
    // position: "absolute",
    fontSize: "50px",
    color: "red"
}

styles.homeButton = {
    position: "absolute",
    left: "20%",
    fontSize: "20px",
    color: "green",
    paddingTop: "25px"
}

styles.loginButton = {
    // position: "absolute",
    // left: "25%",
    fontSize: "20px",
    color: "green",
    // paddingTop: "25px",
}

styles.signupButton = {
    // position: "absolute",
    // left: "30%",
    fontSize: "20px",
    color: "green",
    // paddingTop: "1px"
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
  // left: "36%",
  fontSize: "20px",
  color: "green",
  // paddingTop: "1px"
}

function Header() {
  return (
    <ul>
      <Column flexGrow={1}>
        <Row>
          <Link to="/" >
            <button className="btn" style={styles.mainButton}
            > YeetFood </button>
          </Link>
        </Row>
        <Row horizontal='start'>
          <Column flexGrow={0.1}>
            <Link to="/login" style={styles.loginButton}>Login</Link>
          </Column>
          <Column flexGrow={0.1}>
            <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
          </Column>
          <Column flexGrow={0.1}>
            <Link to="/profile" style={styles.profileButton}>Profile</Link>
          </Column>
          <Column flexGrow={0.1} horizontal='space-between'>
          <Link to="/addmenuitem" style ={styles.addmenuButton}>Add Menu Item</Link>
          </Column>
          <Column flexGrow={0.1} horizontal='space-between'>
          <Link to="/displaymenu" style ={styles.addmenuButton}>Show menu!</Link>
          </Column>
          <Column flexGrow={0.1} horizontal='space-between'>
          <Link to="/addrestaurant" style ={styles.addrestaurantButton}>Add restaurant</Link>
          </Column>
          <Column flexGrow={0.1} horizontal='space-between'>
          <Link to="/listrestaurants" style ={styles.listrestaurantsButton}>Find restaurants</Link>
          </Column>
        </Row>
      </Column>
    </ul>
  );
}



export default App;
