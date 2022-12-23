const { TasksService } = require("../src/service");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const tasksService = new TasksService();
  let result;
  const HEADERS = { "Content-Type": "application/json" };

  try {
    result = await tasksService.listTasks();
    result.statusCode = 200;

    context.res = {
      body: result,
      headers: HEADERS,
    };
  } catch (error) {
    console.log("Exception occurred while logging in --> ", error);
    context.res = {
      status: 500,
      body: { message: error.message },
      headers: HEADERS,
    };
  }
};
