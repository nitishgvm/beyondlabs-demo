const taskService = require("../services/task.service");

const getTasks = (req, res) => {
  try {
    const { role, username } = req.query;

    if (!role || !username) {
      return res.status(400).json({
        message: "role and username are required",
      });
    }

    const tasks = taskService.getTasks({ role, username });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTask = (req, res) => {
  try {
    const task = taskService.addTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const removeTask = (req, res) => {
  try {
    const { role, username } = req.body;
    taskService.deleteTask(Number(req.params.id), { role, username });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(403).json({ message: err.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  removeTask,
};
