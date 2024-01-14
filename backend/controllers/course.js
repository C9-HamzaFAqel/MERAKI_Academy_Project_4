const course = require("../models/course");
const courseModel = require("../models/course");

const creatCourse = (req, res) => {
  const { title, video, image, price, grade, Teacher } = req.body;
  const comment=[]
  const newCourse = new courseModel({
    title,
    video,
    image,
    price,
    grade,
    Teacher,
    comment
  });
  newCourse
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: "course created",
        course: result,
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

const getCourseByTeacher = (req, res) => {
  const teacherId = req.params.teacher;
  courseModel
    .find({
      Teacher: teacherId,
    }).populate([{path:"comment",populate:[{path:"commenter",select:["firstName"]}]},{path:"Teacher" , select :["firstName","lastName"]}])     /* [{path:"comment",select:["comment",{path:"commenter",select:["firstName"]}]},{path:"Teacher" , select :["firstName","lastName"]}] */
    .then((courses) => {
      console.log(courses);
      {
        courses.length
          ? res.status(200).json({
              success: true,

              message: `All the courses for the teacher : ${teacherId}`,

              courses: courses,
            })
          : res.status(404).json({
              success: false,
              message: `The teacher => ${teacherId} has no courses`,
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

const updateCourseById = (req, res) => {
  const { title, video, image, price, grade } = req.body;
  const { id } = req.params;
  courseModel
    .findByIdAndUpdate(
      { _id: id },
      { title, video, image, price, grade },
      { new: true }
    )
    .then((result) => {
       res.status(200).json({
              success: true,
              message: "course updated",
              course: result,
            })
          
      }
    )
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err.message,
      });
    });
};
const deleteCourseById = (req, res) => {
  
  const { id } = req.params;
  courseModel
    .findByIdAndDelete({ _id: id })
    .then((result) => {
      {
        result
          ? res.status(200).json({ success: true, message: "course deleted " })
          : res.status(404).json({
              success: false,
              message: "course not found ",
            });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "server error ",
        err: err.message,
      });
    });
};

const getCourseById = (req, res) => {
  
  const { id } = req.params;
  courseModel
    .findOne({ _id: id })
    .populate([{path:"comment",populate:[{path:"commenter",select:["firstName"]}]},{path:"Teacher" , select :["firstName","lastName"]}])
    .then((result) => {
      {
        result
          ? res.status(200).json({ success: true, course: result })
          : res
              .status(404)
              .json({ seccess: false, message: "course not found" });
      }
    }).catch((err)=>{
      res.status(500).json({
        seccess:false,
        message:"server error",
        err : err.message
      })
    })
};



const getCourseByTitle = (req, res) => {
  
  const { title } = req.params;
  courseModel
    .find({ title: title })
    .populate("Teacher","firstName -_id")
    .then((result) => {
      {
        result.length
          ? res.status(200).json({ success: true, course: result })
          : res
              .status(404)
              .json({ seccess: false, message: "course not found" });
      }
    }).catch((err)=>{
      res.status(500).json({
        seccess:false,
        message:"server error",
        err : err.message
      })
    })
};


const deleteCourseByTeacher = (req, res) => {
  const teacherId = req.params.teacher;
  courseModel
    .deleteMany({
      Teacher: teacherId,
    })
    .then((result) => {
      {result.deletedCount?res.status(200).json({
        success: true,
      message: `Deleted course for the teacher ${teacherId} `
      }):res.status(404).json({
        success: false,
        message: `not found course  for the teacher => ${teacherId} `
      })}
     
    })
    .catch((err) => {
      res.status(500).json({
        success: false,

        message: "Server Error",

        err: err.message,
      });
    });
};


const getCourseByGrade = (req, res) => {
  
  const { grade } = req.params;
  courseModel
    .find({ grade: grade })
    .populate("Teacher","firstName -_id")
    .then((result) => {
      {
        result.length
          ? res.status(200).json({ success: true, course: result })
          : res
              .status(404)
              .json({ seccess: false, message: "course not found for this grade" });
      }
    }).catch((err)=>{
      res.status(500).json({
        seccess:false,
        message:"server error",
        err : err.message
      })
    })
};


const getFreeCourse=(req,res) =>{
  courseModel.find({price:0}).then((result)=>{
    res.status(200).json({
      success:true,
      message:"free course",
      freeCourse: result
    })
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:"server error",
      err :err.message
    })
  })
}
module.exports = {
  creatCourse,
  getCourseByTeacher,
  updateCourseById,
  deleteCourseById,
  getCourseById,
  getCourseByTitle,
  deleteCourseByTeacher,
  getCourseByGrade,
  getFreeCourse
};
