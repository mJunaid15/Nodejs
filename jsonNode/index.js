// javascript objects 

// const bioData = {
//     name : "Junaid",
//     age : "23"
// }

// convert to JSON formate 

// const jsonBioData = JSON.stringify(bioData);
// console.log(jsonBioData)

// json data convert to again an object 

// const objdata = JSON.parse(jsonBioData);
// console.log(objdata.age)


// task 

const fs = require("fs");
const bioData = {
    name : "Junaid",
    age : "23"
}
// write file 
const jsondata = JSON.stringify(bioData);
fs.writeFile("json1.json", jsondata , (err)=>{
    console.log("done")
    
});

// read file 
fs.readFile("json1.json", "utf-8" , (err, data)=>{
    // console.log(data);
    // convert data json to object 
    const dataObj = JSON.parse(data);
    console.log(dataObj)
    
});




