import React, { Component } from 'react';
import axios from 'axios';
export default class Accountinfo{
   
    
    loggedin= (username) =>{
    axios.post('http://localhost:7000/Accountinfo',{
        username:username
    }).then(res => {
        console.log(res.data)
        this.setName(res.data.user.firstname)
        this.setEmail(res.data.user.email)
        this.setAddress(res.data.user.address)
        this.setUsername(res.data.user.username)
        this.setPhone(res.data.user.phone)
        return Promise.resolve(res);
     
       
       
    }); 
}
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

logout = () => {
    localStorage.removeItem('id_name')
    localStorage.removeItem('id_email');
    localStorage.removeItem('id_address');
    localStorage.removeItem('id_username');
    localStorage.removeItem('id_phone');
}
}