const { json } = require("body-parser");
const express = require("express");
const app = express();

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidneys;
  const numOfKidneys = johnkidneys.length;
  let numOfHealthyKidneys = 0;
  for (let i = 0; i < numOfKidneys; i++) {
    if (johnkidneys[i].healthy) {
      numOfHealthyKidneys = numOfHealthyKidneys + 1;
    }
  }
  const numOfUnHealthyKidneys = numOfKidneys - numOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numOfHealthyKidneys,
    numOfUnHealthyKidneys,
  });
});
app.use(express.json());
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({ msg: "Done" });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "done",
  });
});

function isPatient() {
  let isDelete = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      isDelete = true;
    }
  }
  return isDelete;
}
app.delete("/", function (req, res) {
  const newKidneys = [];
  if (isPatient()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({
      msg: "done",
    });
  } else {
    res.json({ msg: "wrong input" });
  }
});
app.listen(3000);
