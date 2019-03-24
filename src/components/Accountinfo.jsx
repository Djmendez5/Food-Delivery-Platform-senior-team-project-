import React, { Component } from 'react';
import axios from 'axios';
 class Acclist extends Component{
state ={
    info:[]
};
handle(){
    const credentials ={
        email: this.state.email,
        password: this.state.password
        
    };
    //console.log(credentials )
}

componentDidMount(){
    axios.get('http://localhost:7000/Accountinfo').then(res => {
        console.log(res);
       
        this.setState({info: res.data});
        //alert("name: " + this.state.info.firstname);
    });
    
    
}

render(){
    return(
        this.handle
       
            //1

    )
}
}
export default Acclist;