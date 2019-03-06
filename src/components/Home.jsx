import React, { Component } from "react";
import './Home.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <AuthButton />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2 className="food-Image">Welcome to Food Life</h2>;
}

function Logging() {
  return <h2>Login</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
    return (
        <div>
            <MuiThemeProvider>
            <h2>Sign Up</h2>

            {/* <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
            </ul> */}
            <TextField
                type="firstname"
                hintText="Enter your Firstname"
                floatingLabelText="Firstname"
            />
            <br />
            <TextField
                type="lastname"
                hintText="Enter your Lastname"
                floatingLabelText="Lastname"
            />
            <br />
            <TextField
                type="username"
                hintText="Enter your Username"
                floatingLabelText="Username"
            />
            <br />
            <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
            />
            <br />
            <TextField
                type="email"
                hintText="Enter your Email"
                floatingLabelText="Email"
            />
            <br />

            <Route path={`${match.path}/:id`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3></h3>}
            />
            {/* from: { pathname: "/" }
            return <Redirect to={from} /> */}
            <button onClick={goHome}>Sign Up</button>
            </MuiThemeProvider>
        </div>
    );
}

function goHome() {
    console.log('/');
    return <Redirect to={"/"} />
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
        <p>You are not logged in.
        <br />
        User: Kevin, Pass: qwerty
        </p>
        
      )
  );
  
function Public() {
    return <h3>Public</h3>;
}

function Protected() {
    return <h3>Test</h3>;
}
  
class Login extends Component {
    state = { redirectToReferrer: false };
    
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
            isLogin: true
        }

    } /* END CONSTRUCTOR */

    login = () => {
        if ( this.state.username == "Kevin" && this.state.password == "qwerty" ) {
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            });
        }
        // fakeAuth.authenticate(() => {
        //     this.setState({ redirectToReferrer: true });
        // });
    };
    
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;
        console.log(this.state.username);
        console.log(this.state.password);
        return (
            <MuiThemeProvider>
            <div>
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

function Header() {
    
    return (
        <ul>
            <div className="style">
                <Link to="/">Home</Link>
            </div>
            <div1 >
                <Link to="/login">Login</Link>
            </div1>
            <br/>
            <div2 >
                <Link to="/signup">Sign Up</Link>
            </div2>
        </ul>
    );
}


export default App;