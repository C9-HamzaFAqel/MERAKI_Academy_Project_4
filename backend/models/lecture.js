const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema({
  title: { type: string, required: true },
  material: { type: string /* , required: true */ },

  grade: { type: string, required: true },

  Teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("Lecture", lectureSchema);
