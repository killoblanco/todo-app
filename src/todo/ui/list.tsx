import { Paper, Stack } from '@mui/material'
import { AddToDoForm } from '../forms/add'
import { useToDoLocalStore } from '../stores/local'
import { ToDoListHeader } from './list-header'
import { ToDoListItem } from './list-item'

export const ToDoList: React.FC = () => {
  const { todos } = useToDoLocalStore()

  return (
    <Stack
      component={Paper}
      spacing={2}
      flexGrow={1}
      p={3}
      borderRadius={2}
    >
      <ToDoListHeader />
      <Stack spacing={1} flexGrow={1}>
        {todos.map((todo) => (<ToDoListItem key={todo.uid} {...todo} />))}
      </Stack>
      <AddToDoForm />
    </Stack>
  )
}
