import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { type FormCtrl, type FormValues } from '../../types'
import { useToDoLocalStore } from '../../stores/local'

export const useFormCtrl = (): FormCtrl => {
  const { add } = useToDoLocalStore()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(zod.object({ text: zod.string().min(3) }))
  })
  const hasError = Boolean(errors.text)

  const onSubmit = handleSubmit((data: FormValues): void => {
    add({
      uid: window.crypto.randomUUID(),
      text: data.text
    })
    reset()
  })

  return {
    register,
    onSubmit,
    hasError
  }
}
