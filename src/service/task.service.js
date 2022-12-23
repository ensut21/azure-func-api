const { connect, disconnect } = require("../config/db.config");
const { taskModel } = require("../model");

class TasksService {
  constructor() {
    connect();
  }

  async createTask(task) {
    return await taskModel.create(task);
  }

  async listTasks() {
    return await taskModel.find();
  }

  async updateTask(task) {
    return await taskModel.updateOne(
      { taskId: { $eq: task.taskId } },
      { taskName: task.taskName, assignee: task.assignee }
    );
  }

  async removeTask(taskId) {
    return await taskModel.findByIdAndRemove(taskId);
  }
}

module.exports = { TasksService };
