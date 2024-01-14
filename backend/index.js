const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/DB")
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const usersRouter=require("./routes/users")
const roleRouter=require("./routes/role")
const courseRouter=require("./routes/course")
const commentRouter=require("./routes/comment")
const cartCourseRouter=require("./routes/cartCourse")
const favoritRouter=require("./routes/favorit")
app.use("/users",usersRouter)
app.use("/role",roleRouter)
app.use("/course",courseRouter)
app.use("/comment",commentRouter)
app.use("/cart",cartCourseRouter)
app.use("/favorit",favoritRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

