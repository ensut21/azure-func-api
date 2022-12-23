const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  taskId: { type: String, required: true },
  taskName: { type: String, required: true },
  assignee: { type: String, required: true },
});

const taskModel = model("Task", taskSchema);

module.exports = {
  taskModel,
};
