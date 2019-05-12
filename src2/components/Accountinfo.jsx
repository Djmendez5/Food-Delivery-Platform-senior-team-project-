import React, { Component } from 'react';
import axios from 'axios';
export default class Accountinfo{
   
    
    loggedin= (username) =>{
       //store all the variables into local storage
    axios.post('http://localhost:7000/Accountinfo',{
        username:username
    }).then(res => {
        console.log(res.data.user.isRestaurant)
        this.setName(res.data.user.firstname)
        this.setEmail(res.data.user.email)
        this.setAddress(res.data.user.address)
        this.setUsername(res.data.user.username)
        this.setPhone(res.data.user.phone)
        this.setisRestaurant(res.data.user.isRestaurant)
        return Promise.resolve(res);
     
       
       
    }); 
}
//set local storage and set up getters
setName =(idName) =>{
    localStorage.setItem('id_name',idName)
}
setEmail = (idEmail) => {
    localStorage.setItem('id_email', idEmail)
}
setAddress = (idAddress) => {
    localStorage.setItem('id_address', idAddress)
}
setUsername = (idUsername) => {
    localStorage.setItem('id_username', idUsername)
}
setPhone = (idPhone) => {
    localStorage.setItem('id_phone', idPhone)
}
setisRestaurant =(idisRestaurant) =>{
    localStorage.setItem('id_isRestaurant', idisRestaurant)
}
getName =() =>{
    return localStorage.getItem('id_name')
}
getEmail = () => {
    return localStorage.getItem('id_email')
}
getAddress = () => {
    return localStorage.getItem('id_address')
}
getUsername = () => {
    return localStorage.getItem('id_username')
}
getPhone =()=>{
    return localStorage.getItem('id_phone')
}
getisRestaurant=()=>{
    return localStorage.getItem('id_isRestaurant')
}

//delete the tokens upon logout
logout = () => {
    localStorage.removeItem('id_name')
    localStorage.removeItem('id_email');
    localStorage.removeItem('id_address');
    localStorage.removeItem('id_username');
    localStorage.removeItem('id_phone');
    localStorage.removeItem('id_isRestaurant');
}
}
