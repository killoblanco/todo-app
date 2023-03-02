import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material'
import { useToDoLocalStore } from '../stores/local'
import { ToDoListItem } from './list-item'
import { Icon } from '@iconify/react'

export const ToDoCompleteList: React.FC = () => {
  const { getCompleted } = useToDoLocalStore()
  const todos = getCompleted()
  const size = todos.length

  if (size <= 0) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Icon icon="tabler:chevron-down" width={24} height={24} />}
      >
        <Stack direction="row" spacing={2} flexGrow={1}>
          <Typography>Completed</Typography>
          <Box flexGrow={1} />
          <Typography>{`${size} Tasks`}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          {todos.map((todo) => (<ToDoListItem key={todo.uid} {...todo} />))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
