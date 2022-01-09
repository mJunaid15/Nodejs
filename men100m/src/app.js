// npm prune : To remove extraneous packages (packages that are installed
// but not in dependency list) run the following command
const express = require("express");
require("./db/conn");
const router = require('./router/mens');


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);


app.listen(port, () => {
  console.log(`connection is successfull at port ${port}`);
});
