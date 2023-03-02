import { Checkbox, Paper, Stack, Typography } from '@mui/material'
import { TODO_STATUS } from '../consts'
import { useToDoLocalStore } from '../stores/local'
import { type Todo } from '../types'

export const ToDoListItem: React.FC<Todo> = (todo: Todo) => {
  const { toggleComplete } = useToDoLocalStore()

  return (
    <Stack direction="row" spacing={2} component={Paper} px={2} py={1} variant="outlined" alignItems="center">
      <Checkbox
        checked={todo.status === TODO_STATUS.COMPLETED}
        onChange={() => {
          toggleComplete({ uid: todo.uid })
        }}
      />
      <Typography>{todo.text}</Typography>
    </Stack>
  )
}
