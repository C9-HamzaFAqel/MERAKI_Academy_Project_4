const express=require("express")
const authentication=require("../middleware/authentication")
const { creatbuyingLecture, getMyCorse } = require("../controllers/buyingLecture")
const buyingLectureRouter= express.Router()

buyingLectureRouter.post("/creat",authentication,creatbuyingLecture)
buyingLectureRouter.get("/myCorse",authentication,getMyCorse)
module.exports=buyingLectureRouter