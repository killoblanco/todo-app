import { Divider, Stack, Typography } from '@mui/material'

export const ToDoListHeader: React.FC = () => (
  <>
    <Stack direction="row" spacing={2}>
      <Typography variant="h5">To Do List</Typography>
    </Stack>
    <Divider flexItem />
  </>
)
