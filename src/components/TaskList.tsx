import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'

type Props = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.VFC<Props> = ({ tasks, setTasks }): JSX.Element => {
  const handleDone = (task: Task) => {
    setTasks(prev => prev.map(t => t.id === task.id ? {...task, done: !task.done} : t))
  }

  const handleDelete = (task: Task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id))
  }

  return (
    <div>
    {
      tasks.length <= 0 ? 'No todo items.' : 
      <div>
        { tasks.map( task => (
          <TaskItem
            key={task.id}
            task={task}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        )) }
      </div>
    }
    </div>
  )
}

export default TaskList
