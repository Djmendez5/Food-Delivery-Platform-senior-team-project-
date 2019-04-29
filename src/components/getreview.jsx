import React, { Component } from 'react';
import axios from 'axios';
import TextField from "material-ui/TextField";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AuthHelperMethods from './AuthHelperMethods';
import Accountinfo from './Accountinfo';
class getreview extends Component{
    Auth = new AuthHelperMethods();
    state = {
      item: "",
     reviews:[]
    };
    
    update_review =(arr)=>{
      let arr2=[0];
      for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i].customer_review)
    }
    let average=0; 
       average = arr2.reduce((previous, current) => current += previous);
       average = average/arr.length;
       average = average.toFixed(1);
      //console.log(average);
    
    axios.put('http://localhost:7000/updateRating',{
    item:this.state.item,
    review:average
    },
    {
      headers: {
        Authorization: 'Bearer ' + this.Auth.getToken()
      }
    }
    )
    }  

  componentDidMount = (item) =>{   
this.state.item = item;
  //const review[];
  //componentDidMount() {
     // event.preventDefault();
      //alert("item: h" + this.state.item);
      
      axios
      .post('http://localhost:7000/getreview',{
      item:this.state.item,
      },
      {
        headers: {
          Authorization: 'Bearer ' + this.Auth.getToken()
        }
      })
      .then(res => {
        //this.state.reviews:res.data
          this.update_review(res.data);
             // this.setState({reviews: res.data});
             // console.log(res.data);
  
  });
  //console.log(this.state.reviews)
  };
  render(){
      return(
          console.log( this.reviews.length)
      )
  }
  }
  const styles = {};
  
  styles.placeCenter = {
    position: "absolute",
    left: "40%",
    paddingTop: "100px"
  }
  export default getreview;