const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username,
    password,
  });
  res.json({
    msg: "user created",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(411).json({
      msg: "incorrect credentials",
    });
  }
});
router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/purchaseCourse", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.body.courseId;
  console.log(courseId);
  const username = req.username;

  try {
    // Await the database operation to ensure it completes before sending the response
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: courseId } }
    );

    // Send response only after the database operation is completed
    res.json({ msg: "purchase completed" });
  } catch (error) {
    // Handle errors properly
    console.error("Error occurred during purchase:", error);
    res.status(500).json({ error: "An error occurred during purchase" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
