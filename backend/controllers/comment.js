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
module.exports={
    creatComment,
    updateCommentById
}