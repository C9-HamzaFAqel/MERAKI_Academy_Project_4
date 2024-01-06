const express=require("express")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const { creatLecture, getLectureByTeacher, updateLectureById, deletelectureById } = require("../controllers/lecture")
const lectureRouter=express.Router()


lectureRouter.post("/create",authentication,authorization("CREAT_LEACTURE"),creatLecture)
lectureRouter.get("/:teacher",getLectureByTeacher)
lectureRouter.put("/:id",authentication,authorization("UPDATE_LEACTURE"), updateLectureById)
lectureRouter.delete("/:id",authentication,authorization("DELETE_LECTURE"),deletelectureById)
module.exports=lectureRouter