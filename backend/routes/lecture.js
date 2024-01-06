const express=require("express")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const { creatLecture, getLectureByTeacher } = require("../controllers/lecture")
const lectureRouter=express.Router()

lectureRouter.post("/create",authentication,authorization("CREAT_LEACTURE"),creatLecture)
lectureRouter.get("/:teacher",getLectureByTeacher)
module.exports=lectureRouter