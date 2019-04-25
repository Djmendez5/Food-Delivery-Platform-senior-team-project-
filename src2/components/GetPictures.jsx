import React, { Component } from "react";
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import axios from "axios";


class GetPic extends React.Component {

    state = {
        showPic: null
    }
    getPictures = () => {
        let pic = "aiyehd4sljtrgwosboxn"
        axios.get("https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/sb7y4vym5esmaqwgv2fb.jpg")
        .then(res => {
            this.setState({
                showPic: res
            });
            console.log(this.state.showPic);
        });
    } 

    render() {
        let pic= "aiyehd4sljtrgwosboxn"
        var link = `https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/${pic}.jpg`
        return (
            <div>
                <button onClick={this.getPictures} > Get Pictures </button>
                <img src = {this.state.showPic}  />
    
                <img src = "https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/aiyehd4sljtrgwosboxn.jpg" />
            </div>
        );
    }
}


export default GetPic;