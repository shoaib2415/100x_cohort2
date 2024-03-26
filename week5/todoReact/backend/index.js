const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { createTodo, updateTodo } = require("./type");
const jwt = require("jsonwebtoken");
const { todo } = require("./db");

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsePayLoad = createTodo.safeParse(createPayLoad);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msd: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayLoad = updateTodo.safeParse(updatePayload);
  if (!parsePayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  const updatedTodo = await todo.findOneAndUpdate(
    { _id: req.body.id },
    { completed: true }
  );

  if (!updatedTodo) {
    return res.status(404).json({ msg: "Todo not found" });
  }

  res.json(updatedTodo); // Respond with the updated todo
});

app.listen(3000);
