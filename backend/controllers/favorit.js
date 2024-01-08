const favoritLectureModel=require("../models/favoritLecture")
const usersModel=require("../models/users")
const creatFavoritLecture=(req,res)=>{
    const userId=req.token.userId 
    const {corse}=req.body
    const newfavoritLecture= new favoritLectureModel({
       corse 
    })
    newfavoritLecture.save().then((result)=>{
     usersModel.findByIdAndUpdate({_id:userId},{$push:{favorit:result._id}},{new:true}).then(()=>{
      res.status(201).json({
        success: true,
        message: "favoritLecture add",
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
    creatFavoritLecture,
    getMyFavorit
}