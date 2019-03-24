import React, { Component } from "react";
import "./Home.css";
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
import Home from './Home'
import AppBar from 'material-ui/AppBar';
import axios from 'axios';

class Signin extends Component {
  state = { isLogin: false
  };

  logincheck = {
    cart: []
  }

  constructor(props) {
    super(props);
    var loginButtons = [];
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
    };
  } /* END CONSTRUCTOR */

  login = () => {
    if (this.state.username == "Kevin" && this.state.password == "qwerty") {
      fakeAuth.authenticate(() => {
        this.setState({ isLogin: true });
      });
    }

    if (this.state.username.length>0 && this.state.password.length>0) {
      var payload = {
        "username": this.state.username,
        "password": this.state.password,
      }

      axios.get('/Accountinfo', (req,res) => {
        this.setState({cart: res.data})
        .then(function (res) {
          console.log(res);
  
          if (res.data.code == 200) {
            console.log("Login successfull!");
            console.log(res.data.user);
  
            // logic to log in
            
            console.log(this.logincheck.cart.username + " ")
            // if cart username == this.username then 
            // start session
  
          }

        })
      })
      
    }

  };

  render() {
    let { isLogin } = this.state;
    if (isLogin) return <Redirect to={'/'} />;

    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <MuiThemeProvider>
        <div style={styles.placeCenter}>
            <AuthButton />
          <h2> Sign in </h2>
          <TextField
            type="username"
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(event, newValue) =>
              this.setState({ username: newValue })
            }
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) =>
              this.setState({ password: newValue })
            }
          />
          <br />
          <button onClick={this.login}>Log in</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
        <p>
            You are logged on !{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign out
        </button>
        </p>
    ) : (
            <p>
                <br />
                User: Kevin, Pass: qwerty
      </p>
        )
);


const styles = {};

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "150px"
};


export default Signin;
