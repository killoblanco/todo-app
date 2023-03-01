import { TextField, InputAdornment } from '@mui/material'
import { Icon } from '@iconify/react'
import { useFormCtrl } from './ctrl'

export const AddToDoForm: React.FC = () => {
  const { onSubmit, register, hasError } = useFormCtrl()

  return (
    <form onSubmit={onSubmit}>
      <TextField
        {...register('text')}
        error={hasError}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon="tabler:square-rounded-plus" width={24} height={24} />
            </InputAdornment>
          )
        }}
        inputProps={{
          placeholder: 'Add new task'
        }}
        fullWidth
      />
    </form>
  )
}
