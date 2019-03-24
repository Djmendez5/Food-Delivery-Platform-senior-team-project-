const express = require("express");
const Sequelize = require('sequelize');
const axios = require('axios');
const cors = require('cors');
const {REACT_APP_GOOGLE_API_KEY} = require('../config.js')
const app = express();
const port = 7000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.listen(port, () =>{
  console.log("running server on port" + port);
})
const sequelize = new Sequelize('postgres://localhost:5432/express-mvp-db', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases:false,
})
const Menus = sequelize.define("Menus", { 
  title: Sequelize.STRING,
  description:Sequelize.STRING,
  nutrition_info:Sequelize.STRING,
  price: Sequelize.INTEGER,
  owner: Sequelize.STRING

})

const AccountList = sequelize.define("AccoutList", {
        firstname: Sequelize.STRING,
        lastname:Sequelize.STRING,
        username:Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        address: Sequelize.STRING
      
      })

      sequelize.sync({
        logging: console.log,
        force: true
      })
      .then(() =>{
       
      })
      .then(() => {
        console.log("Success!");
      })
      .catch(err => {
        console.error(err);
      });

      app.get('/', (req,res) =>{
        
        res.send("Hello")
      });

      
    app.post('/getmenuinfo',(req,res)=>{
      Menus.findAll({
        where:{
          owner: req.body.email
        }
      }).then(user =>{
        res.json(user);
      })

    })

    app.get('/Accountinfo',(req,res)=> {
      AccountList.findAll()
      .then(user => {
        res.json(user);
      })
    })

    app.post('/additem', (req,res) =>{ 
      Menus.create({
        title: req.body.title,
        description: req.body.description,
        nutrition_info:req.body. nutrition_info,
        price: req.body.price,
        owner: req.body.owner 
      })
      res.send("item has been added");
    })

      app.put('/editprofile', (req,res)=>{
        AccountList.update({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            username:req.body.username,
            phone: req.body.phone,
            password: req.body.password,
            address: req.body.address,
          email : req.body.email},
         {where: {email :req.body.email}}).then(rows=>{res.json(rows);
        })
      })

      app.delete('/removeaccount', (req, res)=>{
        AccountList.destroy({ 
          where: {email : req.body.email}
      }).then(()=>{
        res.send("deleted")
      })
    })
        
    app.put('/deleteaccount', (req,res)=>{
      AccountList.update({
        item : ""},
       {where: {name :req.body.name}}).then(rows=>{res.json(rows);
      })
    })

      app.get('/AccountList', (req,res)=>{
      res.send("creating lists and items ")
  
      })

      app.post('/signup', (req,res) =>{
       
        AccountList.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username:req.body.username,
          phone:req.body.phone,
          email: req.body.email,
          password: req.body.password,
          address: req.body.address
        })
        res.send("Account has been created");
      })
      sequelize.sync({
        logging: console.log,
        force: true
      })
      .then(() =>{
       
      })
      .then(() => {
        console.log("Success!");
      })
      .catch(err => {
        console.error("not sucess");
      });

      app.post('/getUserLocation', (req, res) =>{
        console.log(REACT_APP_GOOGLE_API_KEY)
          axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${REACT_APP_GOOGLE_API_KEY}`, {
      headers: {
        "Content-Type": "application/json"
      },

    })
      .then(response => res.json(response.data.location))
      .catch(err => console.log('error', err))
      })

