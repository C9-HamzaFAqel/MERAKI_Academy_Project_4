const express=require("express")
const { creatFavoritLecture, getMyFavorit } = require("../controllers/favorit")
const authentication = require("../middleware/authentication")

const favoritRouter=express.Router()

favoritRouter.post("/creat",authentication, creatFavoritLecture)
favoritRouter.get("/myFavorit",authentication, getMyFavorit)

module.exports=favoritRouter