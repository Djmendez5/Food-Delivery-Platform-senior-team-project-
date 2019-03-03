
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class signin extends React.Component {

    handleChange = event => {
        this.setState( {name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div id="test">
            <button type="submit" style={this.style.singingup}> Sign Up </button>
            Test Page
            </div>
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