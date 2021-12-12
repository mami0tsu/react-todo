import React from 'react';
import { useState } from 'react';

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
    </div>
  )
}

export default App;
