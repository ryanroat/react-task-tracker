import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const name = 'Ryan'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Fathers Day prep',
        day: 'Jun 16 at 12:00 pm',
        reminder: false,
      },
      {
        id: 2,
        text: 'Oscar Dr appointment',
        day: 'Jun 17 at 8:30 am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Ryan interview',
        day: 'Jun 18 at 9:00 am',
        reminder: true,
      }
    ]
  )

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
