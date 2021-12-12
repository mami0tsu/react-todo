import { Button, Block, Form } from 'react-bulma-components'

import React, { useState } from 'react'
import { Task } from './Types'

const { Control, Field, Input } = Form

type Props = {
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskInputForm: React.VFC<Props> = ({tasks, setTasks}): JSX.Element => {
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
    <div>
      <Block>
        <Field className='is-grouped'>
          <Control className='is-expanded'>
            <Input
              type='text'
              className='input'
              value={inputTitle}
              onChange={handleInputChange}
            />
          </Control>
          <Button onClick={handleSubmit}>Submit</Button>
        </Field>
      </Block>
    </div>
  )
}

export default TaskInputForm
