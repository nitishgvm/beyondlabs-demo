const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "tasks.json");

const readTasks = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const writeTasks = (tasks) => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

const getTasks = ({ role, username }) => {
  const tasks = readTasks();

  if (role === "admin") {
    return tasks; // admin sees all
  }

  // user sees only own tasks
  return tasks.filter((task) => task.username === username);
};

const addTask = ({ title, description, username }) => {
  if (!title || !username) {
    throw new Error("Title and username are required");
  }

  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    title,
    description: description || "",
    username,
  };

  tasks.push(newTask);
  writeTasks(tasks);

  return newTask;
};

const deleteTask = (id, requester) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) throw new Error("Task not found");

  // admin can delete any task
  if (requester.role !== "admin" && task.username !== requester.username) {
    throw new Error("Unauthorized");
  }

  writeTasks(tasks.filter((t) => t.id !== id));
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
};
