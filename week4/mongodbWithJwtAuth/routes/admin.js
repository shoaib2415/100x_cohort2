const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const adminname = req.body.adminname;
  const password = req.body.password;
  await Admin.create({
    adminname: adminname,
    password: password,
  });
  res.json({
    msg: "admin succesfully created",
  });
});

router.post("/signin", async (req, res) => {
  const adminname = req.body.adminname;
  const password = req.body.password;
  const admin = await Admin.findOne({
    adminname,
    password,
  });
  if (admin) {
    const token = jwt.sign(
      {
        adminname,
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
router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "courses created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

module.exports = router;
