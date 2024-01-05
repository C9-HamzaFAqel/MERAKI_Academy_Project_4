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
module.exports={
    creatLecture
}