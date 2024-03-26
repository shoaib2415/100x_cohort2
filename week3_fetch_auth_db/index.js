//jsonwebtokens
const express = require("express");
const jwt = require("jsonwebtoken");
const jswtPassword = "123456";
const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "mds@gmail.com",
    password: "123",
    name: "mds",
  },
  {
    username: "shoaib@gmail.com",
    password: "123123",
    name: "shoaib",
  },
  {
    username: "sai@gmail.com",
    password: "456456",
    name: "sai",
  },
];

function userExists(username, password) {
  let existUser = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      existUser = true;
    }
  }
  return existUser;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our memory",
    });
  }
  var token = jwt.sign({ username: username }, jswtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jswtPassword);
    const username = decoded.username;
    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.username == username) {
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
