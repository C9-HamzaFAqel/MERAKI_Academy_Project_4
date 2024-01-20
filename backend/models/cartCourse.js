const mongoose= require("mongoose")

const cartCourseSchema=new mongoose.Schema({
    corse :{type:mongoose.Schema.Types.ObjectId,ref:"Course",required:true},
    
})
module.exports=mongoose.model("Cart",cartCourseSchema)