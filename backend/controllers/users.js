const usersModel=require("../models/users")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")


const register=(req,res)=>{
const {firstName,lastName, email,Image,password,age, country, grade ,role,Specialization }=req.body
const corse=[]
const favorit=[]
const newUser= new usersModel({
    firstName,lastName, email,Image,password,age, country, grade ,role,corse,favorit,Specialization
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
    usersModel.findOne({email}).populate("role").then(async (result)=>{
        if(!result){
            res.status(403).json({
                success:false,
                massage: "The email doesn’t exist or the password you’ve entered is incorrect"
            })
        }else{
            try {
                const valid=await bcrypt.compare(password,result.password)
                if (!valid) {
                    return res.status(403).json({
                      success: false,
                      message: `The email doesn't exist or The password you’ve entered is incorrect`,
                    });
                  }
                  const payload={
                   userId: result._id,
                   Specialization : result.Specialization,
                   role : result.role,
                   country: result.country
                  }
                  const options={
                    expiresIn:"120m"
                  }
                 const token= jwt.sign(payload,process.env.SECRET,options)
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
        console.log("err from login controll",err);
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          })
    })
}

const getAllTeacher=(req,res)=>{
    usersModel.find({role:"659c2864a51ce618919355bd"}).then((result)=>{
        res.json({result:result})
    }).catch((err)=>{
        res.json({
            success:false,
            err:err.message
        })
    })
}
module.exports={
    register,
    login,
    getAllTeacher
}