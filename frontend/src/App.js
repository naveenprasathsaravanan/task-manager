import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_URL || "http://localhost:5000";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!task.trim()) return;
    await axios.post(`${API_URL}/tasks`, { title: task });
    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Task Manager</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}
            <button onClick={() => deleteTask(t._id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
