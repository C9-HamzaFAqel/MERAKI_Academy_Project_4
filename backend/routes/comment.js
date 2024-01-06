const express=require("express")
const { creatComment, updateCommentById, getAllComment } = require("../controllers/comment")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const commentRouter= express.Router()


commentRouter.post("/creat",authentication,authorization("CREATE_COMMENTS"),creatComment)
commentRouter.put("/update/:id",authentication,authorization("UPDATE_COMMENT"),updateCommentById)
commentRouter.get("/comments",authentication,getAllComment)
module.exports=commentRouter