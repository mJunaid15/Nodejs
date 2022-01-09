const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already exist.."],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please enter valid email");
      }
    }
  },
    number: {
      type: Number,
      minlength:11,
      required:true,
   
    },
    address:{
        type:String,
        required: true
    }

  },
);


// create a new collection 

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;




