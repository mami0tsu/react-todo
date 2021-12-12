import { Box, Button, Form } from 'react-bulma-components'

import React from 'react'
import { Task } from './Types'

const { Checkbox, Control, Field, Label } = Form

type Props = {
  task: Task,
  handleDone: (task: Task) => void,
  handleDelete: (task: Task) => void 
}

const TaskItem: React.VFC<Props> = ({ task, handleDone, handleDelete }): JSX.Element => {
  return (
    <Box>
      <Field className='has-addons'>
        <Control className='is-expanded'>
          <Checkbox
            onClick={() => handleDone(task)}
            defaultChecked={task.done}
          >{ task.title }</Checkbox>
        </Control>
        <Button
          onClick={() => handleDelete(task)}
        >Delete</Button>
      </Field>
    </Box>
  )
}

export default TaskItem
