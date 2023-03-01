import { Paper, Stack, Typography } from '@mui/material'
import { type Todo } from '../types'

export const ToDoListItem: React.FC<Todo> = (todo: Todo) => (
  <Stack direction="row" spacing={2} component={Paper} p={2} variant="outlined">
    <Typography>{todo.text}</Typography>
  </Stack>
)
