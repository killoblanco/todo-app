import { Paper, Stack, Typography } from '@mui/material'
import { type Todo } from '../types'

export const ToDoListItem: React.FC<Todo> = (todo: Todo) => (
  <Stack direction="row" spacing={2} component={Paper} px={2} py={1} variant="outlined">
    <Typography>{todo.text}</Typography>
  </Stack>
)
