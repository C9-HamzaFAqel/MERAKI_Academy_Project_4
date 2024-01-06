const express=require("express")
const { creatComment, updateCommentById } = require("../controllers/comment")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const commentRouter= express.Router()


commentRouter.post("/creat",authentication,authorization("CREATE_COMMENTS"),creatComment)
commentRouter.put("/:id",authentication,authorization("UPDATE_COMMENT"),updateCommentById)

module.exports=commentRouter