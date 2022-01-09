const express = require("express");
const path = require("path");
const app = express();
const hbs = require('hbs');


require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path)



app.get("/", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
    res.render("register");
  });


app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
