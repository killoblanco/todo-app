import { Box, Divider, Stack, Typography } from '@mui/material'
import { useToDoLocalStore } from '../stores/local'

export const ToDoListHeader: React.FC = () => {
  const { getActives } = useToDoLocalStore()

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5">To Do List</Typography>
        <Box flexGrow={1} />
        <Typography variant="h5">{`${getActives().length} Tasks`}</Typography>
      </Stack>
      <Divider flexItem />
    </>
  )
}
