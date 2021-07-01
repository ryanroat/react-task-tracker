import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const name = 'Ryan'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([])

  // retrieve tasks from db

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await await res.json()

    return data
  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1  // pseudo id generator for testing

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder display

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header greeting='Welcome' name={name} onAddBtn={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
      <div className="center">No Tasks to show.</div>
      )}
    </div>
  );
}

export default App;
