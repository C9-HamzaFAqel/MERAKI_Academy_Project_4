const lectureModel = require("../models/lecture");

const creatLecture = (req, res) => {
  const { title, material, grade, Teacher } = req.body;
  const newLecture = new lectureModel({
    title,
    material,
    grade,
    Teacher,
  });
  newLecture
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "lecture created",
        lecture: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};

const getLectureByTeacher=(req,res)=>{
  const teacherId=req.query.teacher
  lectureModel.findMany({Teacher:teacherId}).then((lectures)=>{
    {lectures.length?res.status(200).json({success: true,

      message: `All the lectures for the teacher : ${teacherId}`,
      
      lectures: lectures}):res.status(404).json({
      success: false,
      message: `The teacher => ${teacherId} has no lectures`
    })}
    
     
    }).catch((err)=>{
      res.status(500).json({success: false,

        message: "Server Error",
        
        err: err.message})
    })
  }

module.exports={
    creatLecture,
    getLectureByTeacher
}