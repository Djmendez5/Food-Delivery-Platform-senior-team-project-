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

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Topics} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={goProfile} />
        <AuthButton />
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
  return <h2 className="food-Image" style={styles.welcome}>Welcome to YeetFood</h2>;
}

function Logging() {
  return <h2>Login</h2>;
}

function Topics({ match }) {
    return (
        <Signup/>  
    );
}

function goHome() {
    console.log('/');
    return (
        <link to="/">jj
        </link>
    )
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
  
  const AuthButton = withRouter(
    ({ history }) =>
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
  
class Login extends Component {
    state = { isLogin: false };
    
    constructor(props) {

        super(props);
        var loginButtons = [];
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            loginButtons: loginButtons,
            userbuttonLabel: 'Register',
        }

    } /* END CONSTRUCTOR */

    login = () => {
        if ( this.state.username == "Kevin" && this.state.password == "qwerty" ) {
            fakeAuth.authenticate(() => {
                this.setState({ isLogin: true });
            });
        }
    };
    
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { isLogin } = this.state;

        if (isLogin) return <Redirect to={from} />;
        console.log(this.state.username);
        console.log(this.state.password);
        return (
            <MuiThemeProvider>
            <div style={styles.placeCenter}>
                <h2> Sign in </h2>
                <TextField
                    type="username"
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                />
                <br/>
                <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br/>
                <button onClick={this.login}>Log in</button>
            </div>
            </MuiThemeProvider>
        );
        
    }
}

const styles = {};

// paddingTop: "50px",

styles.mainButton = {
    position: "absolute",
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
    position: "absolute",
    left: "25%",
    fontSize: "20px",
    color: "green",
    paddingTop: "25px"
}

styles.signupButton = {
    position: "absolute",
    left: "30%",
    fontSize: "20px",
    color: "green",
    paddingTop: "1px"
}

styles.welcome = {
  paddingTop: "50px"
}

styles.placeCenter = {
  position: "absolute",
  left: "40%",
  paddingTop: "200px"
}

styles.profileButton = {
  position: "absolute",
  left: "36%",
  fontSize: "20px",
  color: "green",
  paddingTop: "1px"
}

function Header() {
  return (
    <ul>
      <div>
        <button class="btn" style={styles.mainButton}
          onClick={goHome}> YeetFood </button>
        <Link to="/" style={styles.homeButton} >Home</Link>
      </div>
      <div>
        <Link to="/login" style={styles.loginButton}>Login</Link>
      </div>
      <br />
      <div>
        <Link to="/signup" style={styles.signupButton}>Sign Up</Link>
      </div>
      <div>
        <Link to="/profile" style={styles.profileButton}>Profile</Link>
      </div>
    </ul>
  );
}



export default App;