const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const {
  creatCourse,
  getCourseByTeacher,
  updateCourseById,
  deleteCourseById,
  getCourseById,
  getCourseByTitle,
  deleteCourseByTeacher,
  getCourseByGrade,
  getFreeCourse,
  getAllCourse,
} = require("../controllers/course");
const courseRouter = express.Router();

courseRouter.get("/all/courses",getAllCourse)

courseRouter.post(
  "/create",
  authentication,
  authorization("CREAT_COURSE"),
  creatCourse
);



courseRouter.get("/serch_1/:teacher", getCourseByTeacher);



courseRouter.put(
  "/:id",
  authentication,
  authorization("UPDATE_COURSE"),
  updateCourseById
);



courseRouter.delete(
  "/:id",
  authentication,
  authorization("DELETE_COURSE"),
  deleteCourseById
);



courseRouter.get("/serch_2/:id", authentication, getCourseById);




courseRouter.get("/serch_3/:title", getCourseByTitle);


courseRouter.delete("/serch/:teacher",authentication,authorization("DELETE_Course_FOR_TEACHER"), deleteCourseByTeacher);

courseRouter.get("/serch_4/:grade",getCourseByGrade)

courseRouter.get("/serch_5/free",getFreeCourse)
module.exports = courseRouter;
