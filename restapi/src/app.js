const express = require("express");
require("./db/connection");
const studentRouter = require("./router/student");

const app = express();
const port = process.env.PORT || 8000;


// middleware
app.use(express.json());
//3: we need to register our router 
app.use(studentRouter);





app.listen(port, () => {
  console.log(`connection setup at ${port}`);
});
