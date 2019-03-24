import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from './components/Home';

class App extends Component {

  state = {
    num : []
  }

  handleClick(event, page) {

    switch(page) {
      case "Home":

      break;
    }

  }

  scream() {
    alert('you passed!');
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }

  style = {
    h1 : {
      color: 'red',
      position: 'absolute',
      left:'50%'
    }
  }
}

export default App;