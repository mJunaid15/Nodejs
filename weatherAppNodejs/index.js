const fs = require("fs");
const http = require("http");
var requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal, orgVal)=>{
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
     temperature = temperature.replace("{%tempMin%} ", orgVal.main.temp_min);
     temperature = temperature.replace("{%tempMax%}", orgVal.main.temp_max);
     temperature = temperature.replace(" {%country%}", orgVal.sys.country);
     temperature = temperature.replace("{%location%}", orgVal.name);
     temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main);


    
     console.log( orgVal.weather[0].main)

     return temperature;


}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=35358b4bb420331c2f7eade9625b9cc4")
      .on("data",  (chunk) => {
        //   convert to json to object 
          const objData = JSON.parse(chunk);
        //   convert obj to array 
          const arrData = [objData]
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData.map((val)=> replaceVal(homeFile, val)).join("");
        res.write(realTimeData);
      })
      .on("end",  (err) => {
        if (err) return console.log("connection closed due to errors", err);

        // console.log("end");
        res.end();
      });
  }
});
server.listen( 8000, "127.0.0.1");
