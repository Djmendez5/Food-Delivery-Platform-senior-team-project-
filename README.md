# Food Delivery Platform

## Brief Description
The Food Delivery Platform is a web application that carries out food delivery services, similar to apps such as UberEats, DoorDash, Grubhub, etc. The key difference from this application to existing apps is that the Food Delivery Platform is focused on both the consumer and the producer. If people from our local communities have a product they would like to sell, using this app would be a great gateway to make money for their business. This application wants to cater our services to local businesses in addition to established and well known restaurants. Another key feature that sets our app apart from theirs is the option to rate and review a single food item, rather than rating the business or restaurant altogether. 

## Build Instructions
  1. Download Node.js and NPM (https://www.npmjs.com/get-npm)
  
  
  2. Download the databse Postgres (https://www.postgresql.org/download/)
  - TIP: What we found the easiest was installing it with homebrew,(https://brew.sh/), by entering brew install postgresql then psql postgres then CREATE ROLE username WITH LOGIN PASSWORD 'quoted password' [OPTIONS]  you will choose the username and password and make sure you remember them. And of course \q to quit.
  
  
  3. While in the folder the project should go, create the project folder and run the following in your terminal:
  
    $ npm i install
    $ npm init
  
  which creates the package-json files.
  
  
  4. We need to install: Express, Sequelize, JSONwebtoken, Axios, CORS, bcrypt, JWT middleware, & Nodemailer.
     Still inside of the project folder run the following in your terminal:

    $ npm install <package name>
     
   For example if we were downloading Express we would run:
     
    $ npm install express     
     
   We can then run this by using
   
    $ node index.js   
   
   
   5. For the frontend run 
   
    $ npm install i create-react-app
    $ npm init react-app my-app    
   
   "my-app" being the name of the project.
   
   
   6. Download Axios, material-ui, jwt-decode, react-router-dom, material-ui/core, simple-flexbox, socket.io-client and
      stream-react-chat again using: 
      
    $ npm install <package name>
    
    
   7. Run with npm start while in the project file.
   
   
   8. Once that is all done run npm start on the react app, node index.js on the Node folder & you should be all set!
   
## Notes
**If you are using Chrome, add Cross Sharing (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en)**

**The backend, Node.js code is stored in a zip file called “backend”. The front end code is under “src2” All the files are there including the component files. Src contains the code server and server2, server2 is working with react stream chat but it is a very early implementation. Src2 is much better tested and implemented.**
