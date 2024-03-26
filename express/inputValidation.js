const express = require("express");
const app = express();
app.use(express.json());
const zod = require("zod");

const schema = zod.array(zod.number());
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  //const kidneysLength = kidneys.length;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({ msg: "input in invalid" });
    return;
  } else {
    res.send({ response });
  }
});
//global catch : it shows error msg  we need to show to the user ie.better error msgn
app.use(function (err, req, res, next) {
  res.json({
    msg: "sorry something went wrong",
  });
});
app.listen(3000);
