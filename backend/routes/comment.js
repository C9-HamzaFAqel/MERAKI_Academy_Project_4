const express=require("express")
const { creatComment, updateCommentById, getAllComment, deleteCommentById } = require("../controllers/comment")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const commentRouter= express.Router()


commentRouter.post("/creat/:lectureId",authentication,authorization("CREATE_COMMENTS"),creatComment)
commentRouter.put("/update/:id",authentication,authorization("UPDATE_COMMENT"),updateCommentById)
commentRouter.get("/get/comments",authentication,getAllComment)
commentRouter.delete("/delete/:id",authentication,authorization("DELETE_COMMENT"),deleteCommentById)
module.exports=commentRouter