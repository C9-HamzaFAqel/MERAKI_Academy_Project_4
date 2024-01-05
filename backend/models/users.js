const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")
const userSchema = new mongoose.Schema({
  firstName: { type:String, required: true },

  lastName: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  age: { type: Number, required: true },

  country: { type: String },

  grade: { type: String },

  Specialization: { type: String },

  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
});
userSchema.pre("save",async function (){
  this.email= this.email.toLowerCase()
  this.password=await bcrypt.hash(this.password,7)
})
module.exports = mongoose.model("User", userSchema);

