import React from 'react'
import { Task } from './Types'

type Props = {
  task: Task,
  handleDone: (task: Task) => void,
  handleDelete: (task: Task) => void 
}

const TaskItem: React.VFC<Props> = ({ task, handleDone, handleDelete }): JSX.Element => {
  return (
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
  )
}

export default TaskItem
