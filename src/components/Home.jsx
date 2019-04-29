import React, { Component } from "react";
import "./Home.css";
import Signup from "./SignUp";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Switch } from "react-router";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Profile from "./Profile";
import { Column, Row } from "simple-flexbox";
import Login from "./Login";
import AddMenuItem from "./AddMenuItem.jsx";
import DisplayMenu from "./DisplayMenu";
import AddRestaurant from "./AddRestaurant";
import ListRestaurants from "./ListRestaurants";
import AddOrder from "./AddOrder";
import OrderHistory from "./OrderHistory";
import Review from "./Review";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import PropTypes from "prop-types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import HomeHelper from "./HomeHelper";
import AddPictures from "./AddPictures";
import GetPictures from "./GetPictures";
import Server from "./server";
import Button from "@material-ui/core/Button";
import DisplayProfit from './DisplayProfit';

function App() {
 
  return (
    <Router>
      <div>
        <Header />
        <Route path="/login" component={Signin} />
        <Route path="/signup" component={Topics} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={goProfile} />
        <Route path="/addmenuitem" component={addMenu} />
        <Route path="/displaymenu" component={displayMenu} />
        <Route path="/addrestaurant" component={AddRestaurant} />
        <Route path="/listrestaurants" component={ListRestaurants} />
        <Route path="/addorder" component={AddOrder} />
        <Route path="/orderhistory" component={OrderHistory} />
        <Route path="/addpic" component={AddPIC} />
        <Route path="/getpic" component={GetPIC} />
        <Route path="/review" component={Review} />
        <Route path='/chat' component={GetChat} />
        <Route path='/profit' component ={DisplayProfit}/>
      </div>
    </Router>
  );
}

function GetChat() {
  return <Server />;
}

function GetPIC() {
  return <GetPictures />;
}

function AddPIC() {
  return <AddPictures />;
}

function goProfile() {
  return <Profile />;
}

function Home() {
  console.log("Hello");
  return (
    <MuiThemeProvider>
      <Row horizontal="center" className="food-Image" style={styles.welcome}>
        <h2> We deliver straight to your door </h2>
      </Row>
    </MuiThemeProvider>
  );
}

function Signin() {
  return <Login />;
}

function addMenu({ match }) {
  return <AddMenuItem />;
}
function addOrder({ match }) {
  return <AddOrder />;
}
function orderhistory({ match }) {
  return <OrderHistory />;
}

function displayMenu({ match }) {
  return <DisplayMenu />;
}
function addRestaurant({ match }) {
  return <AddRestaurant />;
}
function listRestaurants({ match }) {
  return <ListRestaurants />;
}

function Topics({ match }) {
  return <Signup />;
}

const styles = {};

styles.mainButton = {
  border: "transparent",
  textDecoration: "none",
  fontSize: "50px",
  color: "red",
  attachment: "fixed",
  backgroundColor: "orange",
  fontWeight: "bold",
  border: "transparent"
};

styles.loginButton = {
  position: "absolute",
  right: "25%",
  fontSize: "20px",
  color: "red",
  padding: 10,
  fontWeight: "bold",
  border: "transparent"
};

styles.signupButton = {
  position: "absolute",
  fontSize: "20px",
  color: "red",
  right: "15%",
  padding: 10,
  fontWeight: "bold",
  border: "transparent"
};

styles.welcome = {
  paddingTop: "50px"
};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "150px"
};

styles.profileButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green"
};
styles.addmenuButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green"
};
styles.addrestaurantButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green"
};
styles.listrestaurantsButton = {
  // position: "absolute",
  fontSize: "20px",
  color: "green"
};

function Header() {
  
  return (
    <ul>
      <HomeHelper />
      <Column flexGrow={0}>
        <Row horizontal="center" alignSelf="center">
          <Link to="/" style={{ textDecoration: 'none'}}>
            <Button style={styles.mainButton}>
              YEETFOOD
            </Button>
          </Link>
        </Row>
        {/* <Row horizontal='end' > */}
        <Link to="/login" style={styles.loginButton}>
          <Button className="" style={styles.loginButton}>
            Login
          </Button>
        </Link>
        <Link to="/signup" style={styles.signupButton}>
          <Button className="" style={styles.signupButton}>
            SignUp
          </Button>
        </Link>
      </Column>
    </ul>
  );
}

export default App;
