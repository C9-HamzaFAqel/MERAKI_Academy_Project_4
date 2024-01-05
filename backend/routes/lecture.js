const express=require("express")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const { creatLecture } = require("../controllers/lecture")
const lectureRouter=express.Router()

lectureRouter.post("/create",authentication,authorization("CREAT_LECTURE"),creatLecture)
module.exports=lectureRouter