import { useEffect, useState } from 'react'
import { getTasks, addTask, deleteTask } from "../api/taskApi";
import LogoutButton from '../components/LogoutButton';

function Tasks() {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [username, setUsername] = useState("");

    const fetchTasks = async () => {
    try {
        const role = window.localStorage.getItem("user") === "admin" ? "admin" : "user";
        const username = window.localStorage.getItem("user") || "";

      const res = await getTasks(role, username);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {

    const username = window.localStorage.getItem("user") || ""
    console.log({ username });
    if (!title || !username) return;
    console.log({ title, description, username });
    try {
      await addTask({ title, description, username });
      fetchTasks();
      setTitle("");
      setDescription("");
    //   setUsername("");
    } catch (err) {
        console.log(err);
      alert(err.response?.data?.message || "Error adding task");
    }
  };

  const handleDelete = async (id) => {
    try {
        const role = window.localStorage.getItem("user") === "admin" ? "admin" : "user";
        const username = window.localStorage.getItem("user") || "";
      await deleteTask(id, role, username);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      alert("Error deleting task");
    }
  };

    return (
        <>
            <div style={{ padding: "20px", maxWidth: "500px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Tasks</h2>
        <LogoutButton />
      </div>

                {/* Add Task Form */}
                <input
                    type="text"
                    placeholder="Task title *"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br />

                <textarea
                    placeholder="Description (optional)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <br />

                <button onClick={handleAddTask}>Add Task</button>

                <hr />

                {/* Task List */}
                {tasks.length === 0 && <p>No tasks yet</p>}

                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} style={{ marginBottom: "12px" }}>
                            <strong>{task.title}</strong>
                            <br />
                            {task.description && (
                                <span>{task.description}<br /></span>
                            )}
                            <small>Created by: {task.username}</small>
                            <br />
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Tasks
