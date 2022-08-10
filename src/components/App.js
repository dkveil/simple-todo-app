import React from 'react'
import Tasklist from "./Tasklist";
import AddTask from "./AddTask";

function App() {
  const [tasks, setTasks] = React.useState(
    [
      {
        text: 'first task',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        text: 'second task',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        text: 'third task',
        date: '2022-02-15',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  )

  return (
    <div>
      TODO APP
      <AddTask />
      <Tasklist tasks={tasks}/>
    </div>
  );
}

export default App;
