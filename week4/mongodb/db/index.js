const { default: mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://shoaibm2415:shoaibm2415@cluster0.x0hugws.mongodb.net/course_sellingapp"
);

const AdminSchema = new mongoose.Schema({
  adminname: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const Courseschema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", Courseschema);

module.exports = {
  Admin,
  User,
  Course,
};
