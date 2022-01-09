const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/registration").then(()=>{
    console.log("connection sucessfull to db");
}).catch((e)=>{
    console.log(`no connection db ${e}`);
});