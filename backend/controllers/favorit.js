const favoritCourseModel=require("../models/favoritCourse")
const usersModel=require("../models/users")
const creatFavoritCourse=(req,res)=>{
    const userId=req.token.userId 
    const {course}=req.body
    const newfavoritCourse= new favoritCourseModel({
       course 
    })
    newfavoritCourse.save().then((result)=>{
     usersModel.findByIdAndUpdate({_id:userId},{$push:{favorit:result._id}},{new:true}).then(()=>{
      res.status(201).json({
        success: true,
        message: "favoritCourse add",
        favorit: result,
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

const getMyFavorit=(req,res)=>{
    const {userId}=req.token
  usersModel.findOne({_id:userId}).populate("favorit").then((result)=>{
    if(result.favorit.length){  
    res.status(200).json({
      success:true,
      message:"my favorit",
      myFavorit: result.favorit
    })}else{
      res.status(200).json({
        success:true,
        message :"you dont put any corse in favorit list"
        
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
    creatFavoritCourse,
    getMyFavorit
}