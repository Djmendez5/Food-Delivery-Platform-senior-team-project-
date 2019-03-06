import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login/login'
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

  render() {
    return (
      <div>
        <h1 style={this.style.h1}> FoodLife </h1>
        <Home />
        {/* <Login /> */}
      </div>
    );
  }

  style = {
    h1 : {
      color: 'red',
      position: 'absolute',
      left:'40%'
    }
  }
}

export default App;
