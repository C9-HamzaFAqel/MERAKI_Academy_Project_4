const mongoose= require("mongoose")

const buyingLectureSchema=new mongoose.Schema({
    corse :[{type:mongoose.Schema.Types.ObjectId,ref:"Lecture"}]
})
module.exports=mongoose.model("Buying",buyingLectureSchema)