import React, { Component } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import TodoListInput from './component/TodoListInput';
import TodoListDelete from './component/TodoListDelete';
import TodoListPut from './component/TodoListPut';
import Login from './login/login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  render() {
      return (
        <div className="App">
          <h1 style={this.style.h1}> FoodLife </h1>
          <Login />
          <div class="food-Image">
          </div>
          {/* <TodoList />
          <TodoListInput />
          <TodoListPut />
          <TodoListDelete /> */}
        </div>
      )
    }
    style = {
      h1 : {
        color: 'red'
      }
    }
    
  //}
}

export default App;
