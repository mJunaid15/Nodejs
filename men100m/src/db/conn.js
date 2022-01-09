// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/olympics",)
//   .then(() => {
//     console.log("db connection sucessfull");
//   })
//   .catch((e) => {
//     console.log("not connected to db");
//   });


  const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/olympics", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((e) => {
    console.log(`No connection ${e}`);
  });