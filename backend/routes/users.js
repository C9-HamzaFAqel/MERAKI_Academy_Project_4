const express=require("express")
const {register, login, getAllTeacher}=require("../controllers/users")
const authentication = require("../middleware/authentication")
const usersRouter=express.Router()

usersRouter.post("/register",register)
usersRouter.post("/login",login)
usersRouter.get("/teacher",getAllTeacher)
module.exports= usersRouter