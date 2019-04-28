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
            console.log(res)
            this.setState({
                showPic: res
            });
            console.log(this.state.showPic);
        });
    } 

    render() {
        console.log(this.state.showPic);
        let pic= "qk9bewvomtrr58bsuphe"
        var link = `https://res.cloudinary.com/fooddelivery/image/upload/v1555240848/${pic}.jpg`
        return (
            <div>
                <button onClick={this.getPictures} > Get Pictures </button>
                <img src = {link}  />
     
            </div>
        );
    }
}


export default GetPic;