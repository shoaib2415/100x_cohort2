const express = require("express");
const app = express();
app.use(express.json);

function userMiddleware(req, res, next) {
  const username = req.header.username;
  const password = req.header.password;
  if (username != "shoaib" && password != "123456") {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kideyId = req.query.kideyId;
  if (kideyId != 1 && kideyId != 2) {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.send("you are healthy");
  }
);

app.listen(3000);
