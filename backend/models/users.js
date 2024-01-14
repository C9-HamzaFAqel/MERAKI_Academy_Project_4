const mongoose = require("mongoose");
const bcrypt=require("bcryptjs")
const userSchema = new mongoose.Schema({
  firstName: { type:String, required: true },

  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String },
  email: { type: String, required: true, unique: true },
 
  password: { type: String, required: true },

  

 

  grade: { type: String },

  Specialization: { type: String },
  Image:{type:String},
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  corse :[{type:mongoose.Schema.Types.ObjectId,ref:"Cart"}],
  favorit:[{type:mongoose.Schema.Types.ObjectId,ref:"Favorit"}]
});
userSchema.pre("save",async function (){
  this.email= this.email.toLowerCase()
  this.password=await bcrypt.hash(this.password,7)
})
module.exports = mongoose.model("User", userSchema);

