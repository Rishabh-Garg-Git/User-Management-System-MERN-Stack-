import { useEffect, useState } from "react";
import { fetchTasks } from "../api";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
