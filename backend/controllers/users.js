const usersModel=require("../models/users")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
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

const login=(req,res)=>{
    const {email,password}=req.body
    usersModel.findOne({email}).populate("role").then((result)=>{
        if(!result){
            res.status(403).json({
                success:false,
                massage: "The email doesn’t exist or the password you’ve entered is incorrect"
            })
        }else{
            try {
                const valid=bcrypt.compare(password,result.password)
                if (!valid) {
                    return res.status(403).json({
                      success: false,
                      message: `The email doesn't exist or The password you’ve entered is incorrect`,
                    });
                  }
                  const payload={
                   userId: result._id,
                   Specialization : result. Specialization,
                   role : result.role,
                   country: result.country
                  }
                  const options={
                    expiresIn:"120m"
                  }
                 const token= jwt.sign(payload,process.env.SECRET,Option)
                 res.status(200).json({
                    success: true,
                    message: `Valid login credentials`,
                    token: token,
                  })
            } catch (error) {
                throw new Error(error.massage)
            } 
        }
       
    }).catch((err)=>{
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    })
}
module.exports={
    register,
    login
}