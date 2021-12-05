import React from "react";
import { useState } from "react";

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
  const [ inputTitle, setInputTitle ] = useState('')
  const [ count, setCount ] = useState(tasks.length + 1)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value)
  }

  const handleSubmit = () => {
    setCount(count + 1)

    const newTask: Task = {
      id: count,
      title: inputTitle,
      done: false
    }

    setTasks([...tasks, newTask])
    setInputTitle('')
  }

  const handleDone = (task: Task) => {
    setTasks(prev => prev.map(t => t.id === task.id ? {...task, done: !task.done} : t))
  }

  const handleDelete = (task: Task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id))
  }

  return (
    <div className="App">
      <div className="inputForm">
        <input
          type="text"
          className="input"
          value={inputTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
      {
        tasks.length <= 0 ? 'No todo items.' : 
        <ul>
        { tasks.map( task => (
          <li className={task.done ? 'done' : ''}>
          <label>
            <input
              type="checkbox"
              className="checkbox-input"
              onClick={() => handleDone(task)}
              defaultChecked={task.done}
            />
            <span className="checkbox-label">{ task.title }</span>
          </label>
          <button
            onClick={() => handleDelete(task)}
          >Delete</button>
          </li>
        )) }
        </ul>
      }
      </div>
    </div>
  )
}

export default App;
