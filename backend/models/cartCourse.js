const mongoose= require("mongoose")

const cartCourseSchema=new mongoose.Schema({
    corse :[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}]
})
module.exports=mongoose.model("Cart",cartCourseSchema)