import React, { Component } from "react";
import axios from 'axios';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Home.css';


class PersonInput extends Component{
    state ={
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        email:''
    };
    
    
    handleSubmit = event =>{
    event.preventDefault();
    alert("name: " + this.state.firstname);
    const user  ={
        firstname:'',
        lastname:'',
        username:'',
        password:'',
        email:''
    };
    
    
    console.log(user);
    
    axios.post('http://localhost:7000/signup', {firstname: this.state.firstname, lastname:this.state.lastname,username: this.state.username,password: this.state.password, email:this.state.email})
    .then(res => {
       // name: res.data;
        console.log(res.data);
    })
    }
    
    render(){
        return(
            <div>
        <MuiThemeProvider onSubmit ={this.handleSubmit}>
        <h2>Sign Up</h2>

        {}
        <TextField
            type="firstname"
            hintText="Enter your Firstname"
            floatingLabelText="Firstname"
            onChange={e => {this.setState({firstname: e.target.value})}}
        />
        <br />
        <TextField
            type="lastname"
            hintText="Enter your Lastname"
            floatingLabelText="Lastname"
            onChange={e => {this.setState({lastname: e.target.value})}}
        />
        <br />
        <TextField
            type="username"
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={e => {this.setState({username: e.target.value})}}
        />
        <br />
        <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={e => {this.setState({password: e.target.value})}}
        />
        <br />
        <TextField
            type="email"
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange={e => {this.setState({email: e.target.value})}}
        />
        <br />

        <button onClick={this.handleSubmit}>Sign Up</button>
        </MuiThemeProvider>
    </div>
                
        )
    }
    }
    export default PersonInput;