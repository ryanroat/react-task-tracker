import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const name = 'Ryan'

const App = () => {
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

  return (
    <div className="container">
      <Header greeting='Welcome' name={name}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
