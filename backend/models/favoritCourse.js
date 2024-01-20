const mongoose= require("mongoose")

const favoritCourseSchema=new mongoose.Schema({
    course :{type:mongoose.Schema.Types.ObjectId,ref:"Course"}
})
module.exports=mongoose.model("Favorit",favoritCourseSchema)