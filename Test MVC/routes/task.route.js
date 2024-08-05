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
taskRouter.post("/", isValid, createTask);
taskRouter.delete("/:id", deleteTask);
taskRouter.patch("/:id", isValid, updateTask);

module.exports = taskRouter;
