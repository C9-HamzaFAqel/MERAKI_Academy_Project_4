const express=require("express")
const { creatComment, updateCommentById, getAllComment, deleteCommentById } = require("../controllers/comment")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const commentRouter= express.Router()


commentRouter.post("/creat/:courseId",authentication,authorization("CREATE_COMMENTS"),creatComment)
commentRouter.put("/update/:commentId",authentication,authorization("UPDATE_COMMENTS"),updateCommentById)
commentRouter.get("/get/comments",authentication,getAllComment)
commentRouter.delete("/delete/:id",authentication,authorization("DELETE_COMMENTS"),deleteCommentById)
module.exports=commentRouter