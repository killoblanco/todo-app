import { type UseFormReturn } from 'react-hook-form'
import { type TODO_STATUS } from './consts'

export interface Todo {
  uid: string
  text: string
  status: typeof TODO_STATUS[keyof typeof TODO_STATUS]
}

export type FormValues = Pick<Todo, 'text'>
export interface FormCtrl {
  register: UseFormReturn<FormValues>['register']
  onSubmit: (e?: React.SyntheticEvent) => Promise<void>
  hasError: boolean
}

export interface TodoLocalStorage {
  todos: Todo[]
  actives: Todo[]
  completed: Todo[]
  add: (todo: Todo) => void
  toggleComplete: (todo: Pick<Todo, 'uid'>) => void
}
