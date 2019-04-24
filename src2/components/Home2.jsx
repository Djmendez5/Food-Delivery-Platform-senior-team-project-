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

//  import Chip from '@material-ui/core/Chip';
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import HomeHelper from "./HomeHelper";
import AddPictures from "./AddPictures";
import GetPictures from "./GetPictures";
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
        <Route path="/review" component={Review} />
      </div>
    </Router>
  );
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
      <Row horizontal="center">
        <h2 className="food-Image" style={styles.welcome}>
          Find Restaurant 
          <TextField
            type="location"
            // hintText="Address"
            // floatingLabelText="Find Restaurant"
            // onChange={(event, newValue) =>
            //   this.setState({ username: newValue })
            // }

            variant="outlined"
          />
        </h2>
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
  // position: "absolute",
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
          <Link to="/" className="btn">
            <button className="btn" style={styles.mainButton}>
              YeetFood
            </button>
          </Link>
        </Row>
        {/* <Row horizontal='end' > */}
        <Link to="/login" style={styles.loginButton}>
          <button className="btn" style={styles.loginButton}>
            Login
          </button>
        </Link>
        <Link to="/signup" style={styles.signupButton}>
          <button className="btn" style={styles.signupButton}>
            SignUp
          </button>
        </Link>
        {/* </Row> */}

        {/* <Row horizontal='start'>
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
         </Row> */}
      </Column>
    </ul>
  );
}

export default App;
