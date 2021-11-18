const express = require("express");
const app = express();

app.get( "/", (req, res)=>{

 res.send("hello from the home page")

});

app.get( "/about", (req, res)=>{

    res.send("hello from the about page")
   
   });
   app.get( "/contact", (req, res)=>{

    res.send("hello from the contact page")
   
   });
   app.get( "/temp", (req, res)=>{

    res.send("hello from the temp page")
   
   });
   app.listen("8000", ()=>{
       console.log("listening to the port number 800");
   })
