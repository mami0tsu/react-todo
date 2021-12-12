import { Block } from 'react-bulma-components'

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
    title: 'sample task',
    done: false
  }
]

const App: React.VFC = (): JSX.Element => {
  const [ tasks, setTasks ] = useState(initialState)

  return (
    <div>
      <Block>
        <TaskInputForm tasks={tasks} setTasks={setTasks} />
      </Block>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App;
