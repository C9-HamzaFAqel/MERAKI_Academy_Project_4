const express = require("express");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const {
  creatLecture,
  getLectureByTeacher,
  updateLectureById,
  deletelectureById,
  getLectureById,
  getLectureByTitle,
} = require("../controllers/lecture");
const lectureRouter = express.Router();

lectureRouter.post(
  "/create",
  authentication,
  authorization("CREAT_LEACTURE"),
  creatLecture
);
lectureRouter.get("/serch_1/:teacher", getLectureByTeacher);
lectureRouter.put(
  "/:id",
  authentication,
  authorization("UPDATE_LEACTURE"),
  updateLectureById
);
lectureRouter.delete(
  "/:id",
  authentication,
  authorization("DELETE_LECTURE"),
  deletelectureById
);
lectureRouter.get("/serch_2/id",authentication, getLectureById);

lectureRouter.get("/serch_3/:title",getLectureByTitle)
module.exports = lectureRouter;
