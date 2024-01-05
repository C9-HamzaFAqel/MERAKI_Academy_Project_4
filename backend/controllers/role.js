const { default: mongoose } = require("mongoose")
const RoleModel=require("../models/roles")

const creatRole=(res,req)=>{
    const {role,premmisions}=req.body
    const newRole= new RoleModel({
        role,premmisions
    })
    newRole.save().then((result)=>{
        res.status(201).json({
            sucsses:true,
            message : "role created",
            role :result
        }).catch((err)=>{
            res.status(500).json({
                success: false,
                message: `Server Error`,
                err: err.message,
              });
        })
    })
}

module.exports={
    creatRole
}