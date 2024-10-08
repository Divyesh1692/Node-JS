const { Router } = require("express");
const {
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");
const isValid = require("../middlewares/validate");
const taskRouter = Router();
taskRouter.get("/", getTask);
taskRouter.post("/", createTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.patch("/:id", updateTask);

module.exports = taskRouter;
