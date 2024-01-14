const express=require("express")
const authentication=require("../middleware/authentication")
const { creatCartCourse, getMyCorse } = require("../controllers/cartCourse")
const cartCourseRouter= express.Router()

cartCourseRouter.post("/creat",authentication,creatCartCourse)
cartCourseRouter.get("/myCourse",authentication,getMyCorse)
module.exports=cartCourseRouter