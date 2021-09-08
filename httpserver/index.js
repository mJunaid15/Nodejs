const http = require("http");
const url = require("url");
const fs = require("fs");


// create server
const server = http.createServer((req, res) => {

  // read file syngronise taky br br load na ho ik hi bar load hokr rahy 
 const jsondata = fs.readFileSync(`${__dirname}/userAPI/userData.json`, "utf-8")
 
    let newdata = JSON.parse(jsondata);
   
  

  // console.log(req.url)
  if (req.url == "/") {
    res.end("hello from the  sides home");
  } else if (req.url == "/about") {
    res.end("hello from the  sides about us");
    // own API call 
  } else if (req.url == "/userapi") {
    // fs.readFile(`${__dirname}/userAPI/userData.json`, "utf-8", (err, data)=>{
    //   console.log(data);
    //   let newdata = JSON.parse(data);
    //   res.end(newdata[0].name);
    // })
    res.writeHead("200" , {"content-type":"application/json"})

    res.end(newdata[0].name);
  }
  else{
      res.writeHead("404" , {"content-type":"text/html"})
    res.end("page not exist");


  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
