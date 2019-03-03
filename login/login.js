
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import signin from './signin';

export default class login extends React.Component {
    state = {
        name: [],
        password: []
    }
    
    state2 = {
        redirect: false
    }

    constructor(props) {
        super(props);
    }

    renderRedirect = () => {
        console.log("Redirecting");
        // <div id = "log"></div>
        return <Redirect to='/signin' push />
    }

    componentDidMount() {
        // axios.get('https://10.0.0.9:3001/')
        //     .then(res => {
        //         console.log(res);
        //         this.setState({ persons: res.data });
        // });
    }
    
    handleChange = event => {
        this.setState( {name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleSignin = event => {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit" style={this.style.signingin} onClick={this.renderRedirect}> Sign In </button>
                <button type="submit" style={this.style.singingup}> Sign Up </button>
                
                <button type="submit" style={this.style.restaurant}> Find Restaurants </button> 
            </form>
        )
    }

    style = {
        restaurant : {
            position: 'absolute',
            top: '30%',
            left: '20%'
        },
        signingin : {
            position: 'absolute',
            top: '2%',
            left: '84%'
        },
        singingup : {
            position: 'absolute',
            top: '2%',
            left: '90%'
        }

    }

}