const fs = require('fs');
// create a new file 
// fs.writeFileSync("read.txt","welcome to fs system");

// if data present so it will overwrite the file text 
// fs.writeFileSync("read.txt","welcome to Junaid");

// add exist file in more data 
// fs.appendFileSync("read.txt", " hellow how are you");

// how to read file data 
// in node js we have addition data type buffer its is mainly use to store binary data 
// const a = fs.readFileSync("read.txt","");


// to convert in to read data 
// binaryTostring = a.toString();
// console.log(binaryTostring);



// rename file 
// fs.renameSync("read.txt","write.txt")

// asyn 
//
// fs.mkdir("asyn",()=>{
//     console.log('complete')
// })

// fs.writeFile("asyn/bio.txt","my name is junaid",(err)=>{
//         console.log('task complete')
//     })

// fs.appendFile("asyn/bio.txt","im a full stack dev",(err)=>{
//     console.log("complete")
// })

// fs.readFile("asyn/bio.txt","utf-8", (err, data)=>{
//     console.log(data)
// })

// fs.rename("asyn/bio.txt","asyn/myBio.txt",(err)=>{
//     console.log("data")
// })


// fs.unlink("asyn/myBio.txt",(r)=>{
//     console.log("task is ready")
// })

// fs.rmdir("./asyn",(r)=>{
//     console.log("folder is deleted")
// })
