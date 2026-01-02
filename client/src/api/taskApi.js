import api from "./axios";

export const getTasks = (role, username) =>
  api.get("/tasks", {
    params: { role, username },
  });

export const deleteTask = (id, role, username) =>
  api.delete(`/tasks/${id}`, {
    data: { role, username },
  });

export const addTask = (task) => api.post("/tasks", task);