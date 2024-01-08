const mongoose= require("mongoose")

const favoritLectureSchema=new mongoose.Schema({
    corse :[{type:mongoose.Schema.Types.ObjectId,ref:"Lecture"}]
})
module.exports=mongoose.model("Favorit",favoritLectureSchema)