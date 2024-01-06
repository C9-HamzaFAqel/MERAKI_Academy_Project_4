const express=require("express")
const { creatComment } = require("../controllers/comment")
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const commentRouter= express.Router()


commentRouter.post("/creat",authentication,authorization("CREATE_COMMENTS"),creatComment)


module.exports=commentRouter