const express = require("express");
const path = require("path");

const app = express();
// path 
 const staticpath = path.join(__dirname,"../public");
//  console.log(staticpath);

// builtIn middleware 
app.use(express.static(staticpath));
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
