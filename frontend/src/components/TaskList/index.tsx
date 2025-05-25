import { useEffect, useState } from "react";
import api from "../../service/auth";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get("/tasks/").then((res) => setTasks(res.data));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
