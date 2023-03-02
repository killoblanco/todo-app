import { Paper, Stack } from '@mui/material'
import { AddToDoForm } from '../forms/add'
import { ToDoActiveList } from './active-list'
import { ToDoCompleteList } from './complete-list'
import { ToDoListHeader } from './list-header'

export const ToDoList: React.FC = () => (
  <Stack
    component={Paper}
    spacing={2}
    flexGrow={1}
    p={3}
    borderRadius={2}
  >
    <ToDoListHeader />
    <Stack spacing={1} flexGrow={1}>
      <ToDoActiveList />
      <ToDoCompleteList />
    </Stack>
    <AddToDoForm />
  </Stack>
)
