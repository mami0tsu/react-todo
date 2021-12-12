import React from 'react';
import { useState } from 'react';
import TaskInputForm from './components/TaskInputForm'
import TaskList from './components/TaskList'

type Task = {
  id: number,
  title: string,
  done: boolean
}

const initialState: Task[] = [
  {
    id: 1,
    title: '1st task',
    done: false
  }
]

const App: React.FC = () => {
  const [ tasks, setTasks ] = useState(initialState)

  return (
    <div className="App">
      <TaskInputForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
