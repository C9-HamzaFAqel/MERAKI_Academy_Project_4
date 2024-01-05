const usersModel=require("../models/users")
const register=(req,res)=>{
const {firstName,lastName, email,password,age, country, grade ,role }=req.body
const newUser= new usersModel({
    firstName,lastName, email,password,age, country, grade ,role
})
newUser.save().then((result)=>{
    res.status(201).json({
        success: true,
        message: "Account Created Successfully",
        user: result
    })
}).catch((err)=>{
    {err.keyPattern? res.status(409).json({
        success: false,
        message: `The email already exists`,
      }) : res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      })}
})
}