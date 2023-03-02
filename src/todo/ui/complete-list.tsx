import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'
import { TODO_STATUS } from '../consts'
import { useToDoLocalStore } from '../stores/local'
import { ToDoListItem } from './list-item'
import { Icon } from '@iconify/react'

export const ToDoCompleteList: React.FC = () => {
  const { completed } = useToDoLocalStore()

  if (completed.length <= 0) return null

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Icon icon="tabler:chevron-down" width={24} height={24} />}
      >
        <Typography>Completed</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1}>
          {completed.map((todo) => (<ToDoListItem key={todo.uid} {...todo} />))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}
