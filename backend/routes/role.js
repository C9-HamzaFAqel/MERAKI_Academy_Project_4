const express=require("express")
const { creatRole } = require("../controllers/role")

const roleRouter=express.Router()
roleRouter.post("/",creatRole)
 
module.exports=roleRouter;