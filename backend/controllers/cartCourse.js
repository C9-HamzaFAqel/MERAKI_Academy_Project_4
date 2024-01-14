const cartCourseModul=require("../models/cartCourse")
const usersModel=require("../models/users")
const creatCartCourse=(req,res)=>{
    const userId=req.token.userId 
    const {corse}=req.body
    const newCartCourse= new cartCourseModul({
       corse 
    })
    newCartCourse.save().then((result)=>{
     usersModel.findByIdAndUpdate({_id:userId},{$push:{corse:result._id}},{new:true}).then(()=>{
      res.status(201).json({
        success: true,
        message: "cartCourse add",
        corse: result,
      })
     }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
          });
     })
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
          });
    })
}

const getMyCorse=(req,res)=>{
  const {userId}=req.token
  usersModel.findOne({_id:userId}).populate("corse").then((result)=>{
    if(result.corse.length){  
    res.status(200).json({
      success:true,
      message:"my corse",
      myCorse: result.corse
    })}else{
      res.status(200).json({
        success:true,
        message :"you dont buy any corse"
        
      })
    }
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:"server err",
      err:err.message
    })
  })
}
module.exports={
    creatCartCourse,
    getMyCorse
}