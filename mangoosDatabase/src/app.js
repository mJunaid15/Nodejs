const mongoose = require("mongoose");
// connection creation or creating a new db
mongoose
  .connect("mongodb://localhost:27017/nizam", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection sucessfull..."))
  .catch((err) => console.log(err));
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
// creating collections
const Playlist = new mongoose.model("Playlist", playListSchema);

// inseting documents add or new


const createDocument = async () => {
  try {
    const angular = new Playlist({
      cName: "vue.js",
      status: "not complete",
      type: "frontend",
    })
    const result = await angular.save();
    console.log(result);
  } catch (error) {
    console.log(error);

  }
};
createDocument();
