const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://shoaibm2415:shoaibm2415@cluster0.x0hugws.mongodb.net/todo"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
