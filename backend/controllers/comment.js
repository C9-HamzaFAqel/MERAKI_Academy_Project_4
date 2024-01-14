const commentModel = require("../models/Comment");
const courseModel = require("../models/course");
const creatComment = (req, res) => {
  const { comment } = req.body;
  const commenter = req.token.userId;
  const { courseId } = req.params;
  const newComment = new commentModel({ comment, commenter });
  newComment
    .save()
    .then((result) => {
      courseModel
        .findByIdAndUpdate(
          { _id: courseId },
          { $push: { comment: result._id } },
          { new: true }
        )
        .then(() => {
           res.status(200).json({
                  success: true,
                  message: "comment add",
                  course: result,
                })}).catch((err)=>{
                  res.status(500).json({
                    success: false,
                    message: "Server Error",
                    err: err.message,
                  });
                })
              
          }).catch((err) => {
          res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
          });
        });

      /*   res.status(201).json({
        success: true,

        message: "comment created",

        comment: result,
      }); */
    /* })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      }); */
    }


const updateCommentById = (req, res) => {
  const { comment } = req.body;
  const { commentId } = req.params;
  commentModel
    .findByIdAndUpdate({ _id: commentId }, { comment }, { new: true })
    .then((result) => {
      res.status(200).json({
        success: true,

        message: "comment update",

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

const getAllComment = (req, res) => {
  commentModel
    .find({})
    .populate("commenter", "firstName -_id")
    .then((result) => {
      {
        result.length
          ? res.status(200).json({
              success: true,
              message: "all comment",
              comments: result,
            })
          : res.status(404).json({
              success: false,
              message: "no comment yet",
            });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};

const deleteCommentById = (req, res) => {
  const { id } = req.params;
  commentModel
    .findByIdAndDelete({ _id: id })
    .then((result) => {
      {
        result
          ? res.status(200).json({ success: true, message: "comment deleted " })
          : res.status(404).json({
              success: false,
              message: "comment not found ",
            });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error ",
        err: err.message,
      });
    });
};
module.exports = {
  creatComment,
  updateCommentById,
  getAllComment,
  deleteCommentById,
};
