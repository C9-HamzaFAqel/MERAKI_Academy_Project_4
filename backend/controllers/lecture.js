const lectureModel = require("../models/lecture");

const creatLecture = (req, res) => {
  const { title, video, image, price, grade, Teacher } = req.body;
  const newLecture = new lectureModel({
    title,
    video,
    image,
    price,
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

const getLectureByTeacher = (req, res) => {
  const teacherId = req.params.teacher;
  console.log("teacherId", teacherId);
  lectureModel
    .find({
      Teacher: teacherId,
    })
    .then((lectures) => {
      console.log(lectures);
      {
        lectures.length
          ? res.status(200).json({
              success: true,

              message: `All the lectures for the teacher : ${teacherId}`,

              lectures: lectures,
            })
          : res.status(404).json({
              success: false,
              message: `The teacher => ${teacherId} has no lectures`,
            });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,

        message: "Server Error",

        err: err.message,
      });
    });
};

const updateLectureById = (req, res) => {
  const { title, video, image, price, grade } = req.body;
  const { id } = req.params;
  lectureModel
    .findByIdAndUpdate(
      { _id: id },
      { title, video, image, price, grade },
      { new: true }
    )
    .then((result) => {
      {
        result
          ? res.status(200).json({
              success: true,
              message: "lecture updated",
              lecture: result,
            })
          : res.status(404).json({
              success: false,
              message: "lecture not found",
            });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};
const deletelectureById=(req,res)=>{
  const {id}=req.params
  lectureModel.findByIdAndDelete({_id: id}).then((result)=>{
    {result?res.status(200).json({success: true,
      message: "lecture deleted "}):res.status(404).json({
        success: false,
message: "lecture not found "
      })}
  }).catch((err)=>{
    res.status(500).json({
      success: false,
message: "server error ",
err: err.message
    })
  })
}
module.exports = {
  creatLecture,
  getLectureByTeacher,
  updateLectureById,
  deletelectureById
};
