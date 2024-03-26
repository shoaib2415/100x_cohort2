const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://shoaibm2415:shoaibm2415@cluster0.x0hugws.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(email) {
  let existingUser = await User.findOne({ email: email });
  return existingUser;
}

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  let existingUsers = userExists(email);
  if (!existingUsers) {
    return res.status(400).send("username already exist");
  } else {
    const user = new User({
      name: name,
      email: email,
      password: password,
    });

    user.save();
    res.json({
      msg: "User created successfully",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  let authUser = await User.findOne({ email: email, password: password });
  if (!authUser) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ email: email }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jswtPassword);
    const email = decoded.email;
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.email == email) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.listen(3000);

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// app.use(express.json());
// mongoose.connect(
//   "mongodb+srv://shoaibm2415:shoaibm2415@cluster0.x0hugws.mongodb.net/userappnew"
// );

// const User = mongoose.model("Users", {
//   name: String,
//   email: String,
//   password: String,
// });

// app.post("/signup", async function (req, res) {
//   const email = req.body.email;
//   const password = req.body.password;
//   const name = req.body.name;

//   const existingUser = await User.findOne({ email: email });
//   if (existingUser) {
//     return res.status(400).send("username already exist");
//   }
//   const user = new User({
//     name: name,
//     email: email,
//     password: password,
//   });

//   user.save();
//   res.json({
//     msg: "User created successfully",
//   });
// });

// app.listen(3000);
