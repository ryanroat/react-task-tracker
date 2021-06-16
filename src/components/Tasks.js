const tasks = [
  {
    id: 1,
    text: 'Task 1',
    day: 'Jun 16 at 4:00 pm',
    reminder: false,
  },
  {
    id: 2,
    text: 'Oscar Dr appointment',
    day: 'Jun 17 at 8:30 am',
    reminder: true,
  },
  {
    id: 1,
    text: 'Ryan interview',
    day: 'Jun 18 at 9:00 am',
    reminder: true,
  }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
