import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// Anything here is the global state.

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "I love food",
      day: "Jul 6th at 12:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "I love to eat",
      day: "Jul 4th at 11:45am",
      reminder: false,
    },
    {
      id: 3,
      text: "I live to fight and die another day",
      day: "Jul 1st at 2:30pm",
      reminder: false,
    },
  ]);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask]);
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header title="Tasker" />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}/>: ( 'No Tasks to Show'
      )} 
    </div>
  );
}

export default App;
