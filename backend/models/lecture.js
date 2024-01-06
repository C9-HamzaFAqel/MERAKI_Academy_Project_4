const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  video: { type: String  },
  image:{type:String,required:true},
  price:{type:Number,required:true},
  grade: { type: String, required: true },
  Teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment:{type:mongoose.Schema.Types.ObjectId,ref:"Comment"}
});
module.exports = mongoose.model("Lecture", lectureSchema);
