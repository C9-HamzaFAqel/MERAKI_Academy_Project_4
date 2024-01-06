const commentModel = require("../models/Comment");

const creatComment = (req, res) => {
  const { comment, commenter } = req.body;
  const newComment = new commentModel({ comment, commenter });
  newComment
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,

        message: "comment created",

        comment: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

const updateCommentById=(req,res)=>{
    const {comment}=req.body
    const {id}=req.params
    commentModel.findByIdAndUpdate({_id:id},{comment},{new:true}).then((result)=>{
res.status(200).json({
    success: true,

        message: "comment update",

        comment: result,
})
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
        })
    })
}

const getAllComment=(req,res)=>{
    commentModel.find({}).populate("commenter","firstName -_id").then((result)=>{
        {result.length?res.status(200).json({
            success:true,
            message:"all comment",
            comments: result
        }) : res.status(404).json({
            success:false,
            message:"no comment yet",
        }) }
        
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:"server error",
            err:err.message
        })
    })
}

module.exports={
    creatComment,
    updateCommentById,
    getAllComment
}