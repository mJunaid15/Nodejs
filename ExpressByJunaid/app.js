// require express 
const express = require("express");

// create new application with expres js 
const app = express();

// get means read the path of the website and its takes call back finction and required 2 peramiter 
// req (which client is send) and res (which we send the res )
app.get("/" , (req, res)=>{

    // send the response 
    res.send("hello world huh from the express js");

});

app.get("/about" , (req, res)=>{

    // send the response 
    res.send("hello world huh from the express js about page");

});

// server is listening to the port number 
app.listen(8000 , (err)=>{
    console.log(`listening to the port number 800 ${err}`)
})