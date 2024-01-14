const express=require("express")
const { creatFavoritCourse, getMyFavorit } = require("../controllers/favorit")
const authentication = require("../middleware/authentication")

const favoritRouter=express.Router()

favoritRouter.post("/creat",authentication, creatFavoritCourse)
favoritRouter.get("/myFavorit",authentication, getMyFavorit)

module.exports=favoritRouter