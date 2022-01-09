const express = require("express");
const Student = require("../models/student");

//1: create a new router 
const router = new express.Router();


//2: we need to define a router 

router.get("/jd", (req, res)=>{
    res.send("hello from the router")
})


// create a new student using promises
// app.post("/student", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// //   res.send("Hello from the other side");
// });



// create a new student using asyn await
router.post("/student", async (req, res) => {
    try {
      console.log(req.body);
      const user = new Student(req.body);
      const createStudent = await user.save();
      res.status(201).send(createStudent);
    } catch (error) {
      res.status(400).send(error);
    }
    //   res.send("Hello from the other side");
  });
  
  // read data of the students
  router.get("/student", async (req, res) => {
    try {
      const studentData = await Student.find();
      res.status(201).send(studentData);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  // read data  of the students only one individually
  router.get("/student/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentDataOne = await Student.findById(_id);
      console.log(studentDataOne);
      if (!studentDataOne) {
        res.status(404).send();
      } else {
        res.status(201).send(studentDataOne);
      }
    } catch (error) {
      res.send(error);
    }
  });
  
  
  // update student from the student database 
  router.patch("/student/:id", async(req, res)=>{
    try {
      const _id = req.params.id;
    const updatestudent = await Student.findByIdAndUpdate(_id , req.body, {
        new : true
      })
      console.log(updatestudent);
      res.send(updatestudent)
      
    } catch (error) {
      res.status(404).send(error)
    }
  })
  
  // delete student from the database
  router.delete("/student/:id", async(req, res) => {
    try {
      const _id = req.params.id;
      const deleteStudent = await Student.findByIdAndDelete(_id);
      if (!_id) {
        return res.status(400).send();
      }
      res.send(deleteStudent);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

module.exports = router;