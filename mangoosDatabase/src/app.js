const mongoose = require("mongoose");
// connection creation or creating a new db
mongoose
  .connect("mongodb://localhost:27017/nizam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection sucessfull..."))
  .catch((err) => console.log(err));

  // schema a mangoose shcema defines  the struckture  of the dociment ,
// default value, validator, etc 
const playListSchema = new mongoose.Schema({
  cName: {
    type: String,
    required: true,
  },
  status: String,
  type: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
// creating collections/table
const Playlist = new mongoose.model("Playlist", playListSchema);

// inseting documents/row add or new


const createDocument = async () => {
  try {
    const mongooseDb = new Playlist({
      cName: "react.js",
      status: " complete",
      type: "frontend",
    })
     const exPress = new Playlist({
      cName: "express.js",
      status: " complete",
      type: "backend",
    })
    const result = await Playlist.insertMany([mongooseDb,exPress]);
    console.log(result);
  } catch (error) {
    console.log(error);

  }
};
// createDocument();


// get document 

// const getDocument = async ()=>{
// const resul = await  Playlist.find({status:"not complete"})
// .select({status: 1});
// console.log(resul);
// }
// getDocument();




// find queries operator - expression 
// const getDocument = async ()=>{
//   const resul = await  Playlist.find({status:{$in :["not complete", "frontend"]}})
//   .select({cName: 1,type: 1});
//   console.log(resul);
//   }
//   getDocument();

// logical operator 
const getDocument = async ()=>{
  const resul = await  Playlist.find({$or : [{type:"frontend"},{status:"complete"}]})
  .select({cName: 1,type: 1, status: 1});
  console.log(resul);
  }
  // getDocument();


  // update documents 
  // const updateDocument = async (_id)=>{
  //   try {
  //     const result = await Playlist.updateOne({_id},{
  //       $set:{
  //         cName : "AngularJs"
  //       }
  //     });
  //     console.log(result);
      
  //   } catch (error) {
      
  //   }
  // }
  // updateDocument("6196436621907298278d2638")
  // update document by findByIdAndupdate
  const updateDocument = async (_id)=>{
    try {
      const result = await Playlist.findByIdAndUpdate({_id},{
        $set:{
          cName : "Angular"
        }
      },{
        new: true,
        useFindAndModify : false
      }  );
      console.log(result);
      
    } catch (error) {
      
    }
  }
  // updateDocument("6196436621907298278d2638")


  // delete document 

  const deleteDocument = async (_id)=>{
    try {
      const result = await Playlist.findByIdAndDelete({_id})
      console.log(result);
    } catch (error) {
      console.log(error);
    }

  }
  deleteDocument("619646474c1c3041a594a392");